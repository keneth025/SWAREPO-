import { Injectable } from '@angular/core';
import { SPList } from 'src/constant/list.constant';
import { getAllData } from '../../util/data.util';
import { Answer, Exam, Question, QuestionType } from '../model/exam.model';
import { Person } from '../model/_model';
import { SPItemService } from './_service';

@Injectable({
  providedIn: 'root'
})
export class ExamService extends SPItemService<Exam> {
  protected serviceName = 'Exam Service';

  protected get query() {
    return this.sp.web.lists.getByTitle(SPList.EXAM).items
    .expand(
      'Owners',
      'OwnerModifiedBy'
    )
    .select(
      '*',
      'Owners/Id',
      'Owners/Title',
      'Owners/EMail',
      'OwnerModifiedBy/Id',
      'OwnerModifiedBy/Title',
      'OwnerModifiedBy/EMail'
    )
    .orderBy('Title');
  }

  protected toObject(data) {
    const {
      Id,
      Title,
      Description,
      Tags,
      PassingRate,
      RelatedCoursesId,
      LearningSubCategoryId,
      Owners,
      OwnerModifiedBy,
      OwnerModified,
    } = data;
    const ownerArray = Owners ? Owners.map(p => new Person({
      Id: p.Id,
      Title: p.Title,
      EMail: p.EMail
    })) : [];
    const editorObj: Person = OwnerModifiedBy ? new Person({
      Id: OwnerModifiedBy.Id,
      Title: OwnerModifiedBy.Title,
      EMail: OwnerModifiedBy.EMail
    }) : new Person({});
    return new Exam({
      Id,
      Title,
      LearningSubCategoryId,
      Description,
      Tags,
      PassingRate,
      RelatedCoursesId,
      Owners: ownerArray,
      Editor: editorObj,
      Modified: OwnerModified ? new Date(OwnerModified) : null,
      IsOwner: ownerArray.some(e => e.Id === this.UserId) || this.IsSiteOwner,
    });
  }

  private get questionQuery() {
    return this.sp.web.lists.getByTitle(SPList.EXAM_QUESTION).items;
  }

  private get answerQuery() {
    return this.sp.web.lists.getByTitle(SPList.EXAM_QUESTION_ANSWER).items;
  }

  async getQuestionsAndAnswers(examId: number) {
    const questionList = await this.getQuestions(examId);
    const questionIds = questionList.map(e => e.Id);
    const answerList = await this.getAnswers(questionIds);
    return questionList.map(
      question => {
        question.Answers = answerList.filter(answer => answer.QuestionId === question.Id);
        return question;
      }
    );
  }

  private async getQuestions(examId: number) {
    const questionList = await getAllData(
      this.questionQuery
      .filter(`ExamId eq ${examId}`)
    );
    return questionList.map(
      (data) => {
        const { Id, ExamId, Title, QuestionText, QuestionType: Type, QuestionIsTrue: IsTrue } = data;
        return new Question({
          Id,
          ExamId,
          Title,
          QuestionText,
          Type,
          IsTrue
        });
      }
    );
  }

  private async getAnswers(questionIds: number[]) {
    const { chunk, batchIdSize } = this;
    const batchSize = (chunk * batchIdSize);
    let returnArr: Answer[] = [];
    for (let idx = 0; idx < questionIds.length; idx += batchSize) {
      const batchArr = questionIds.slice(idx, (idx + batchSize));
      let queryArr: string[] = [];

      for (let batchIdx = 0; batchIdx < batchArr.length; batchIdx += batchIdSize) {
        const chunkArr = batchArr.slice(batchIdx, (batchIdx + batchIdSize));
        let query = '';
        for (const [itemIdx, questionId] of chunkArr.entries()) {
          query += `QuestionId eq '${questionId}'`;
          if (itemIdx < chunkArr.length - 1) { query += ' or '; }
        }
        queryArr = [...queryArr, query];
      }
      const promiseArr = queryArr.map(
        e => getAllData(this.answerQuery.filter(e)).then(
          data => data.map(
            i => {
              const { Id, QuestionId, Title, AnswerText, IsCorrect } = i;
              return new Answer({
                Id,
                QuestionId,
                Title,
                AnswerText,
                IsAnswer: IsCorrect,
              });
            }
          )
        )
      );
      const tempData = (await Promise.all(promiseArr)).reduce((returnVal, currentVal) => [...returnVal, ...currentVal], []);
      returnArr = [...returnArr, ...tempData];
    }
    return returnArr;
  }

  async saveQuestionList(dataArr: Question[]) {
    let returnArr: Question[] = [];
    const questionToUpdateList = dataArr.filter(e => e.Id !== -1);
    const questionToCreateList = dataArr.filter(e => e.Id === -1);
    const batchResult = await this.batchSaveQuestions(questionToUpdateList);
    returnArr = [
      ...returnArr,
      ...batchResult,
    ];

    for (const question of questionToCreateList) {
      const result = await this.saveQuestion(question);
      returnArr = [
        ...returnArr,
        result
      ];
    }

    return returnArr;
  }

  private async batchSaveQuestions(dataArr: Question[]) {
    let returnArr: Question[] = [];

    const { chunk } = this;
    for (let idx = 0; idx < dataArr.length; idx += chunk) {
      const chunkArr = dataArr.slice(idx, (idx + chunk)).map(
        (e) => this.saveQuestion(e)
      );
      const tempArr = await Promise.all(chunkArr);
      returnArr = [...returnArr, ...tempArr];
    }
    return returnArr;
  }

  private async saveQuestion(data: Question) {
    const { Type, Answers } = data;
    if (data.Id === -1) {
      const res = await this.questionQuery.add(data.toSPData());
      data.Id = res.data.ID;
      switch (Type) {
        case QuestionType.TRUE_OR_FALSE:
          break;
        case QuestionType.SINGLE_ANSWER:
        case QuestionType.MULTIPLE_ANSWER:
          let savedAnswerList: Answer[] = [];
          for (const answer of Answers) {
            answer.QuestionId = data.Id;
            const savedAnswer = await this.saveAnswer(answer);
            savedAnswerList = [
              ...savedAnswerList,
              savedAnswer,
            ];
          }
          data.Answers = savedAnswerList;
          break;
      }
      return data;
    }

    await this.questionQuery.getById(data.Id).update(data.toSPData());
    switch (Type) {
      case QuestionType.TRUE_OR_FALSE:
        break;
      case QuestionType.SINGLE_ANSWER:
      case QuestionType.MULTIPLE_ANSWER:
        let savedAnswerList: Answer[] = [];
        const answersToUpdateList = Answers.filter(e => e.Id !== -1).map(e => this.saveAnswer(e));
        const updatedAnswerList = await Promise.all(answersToUpdateList);
        savedAnswerList = [
          ...savedAnswerList,
          ...updatedAnswerList
        ];
        const answerToCreateList = Answers.filter(e => e.Id === -1);
        for (const answer of answerToCreateList) {
          answer.QuestionId = data.Id;
          const savedAnswer = await this.saveAnswer(answer);
          savedAnswerList = [
            ...savedAnswerList,
            savedAnswer,
          ];
        }
        data.Answers = savedAnswerList;
        break;
    }
    return data;
  }

  private async saveAnswer(data: Answer) {
    if (data.Id === -1) {
      const res = await this.answerQuery.add(data.toSPData());
      data.Id = res.data.ID;
      return data;
    }
    await this.answerQuery.getById(data.Id).update(data.toSPData());
    return data;
  }

  async removeQuestionList(dataArr: Question[]) {
    const { chunk } = this;
    for (let idx = 0; idx < dataArr.length; idx += chunk) {
      const chunkArr = dataArr.slice(idx, (idx + chunk)).map(
        (e) => this.deleteQuestion(e)
      );
      const tempArr = await Promise.all(chunkArr);
    }
  }

  private async deleteQuestion(data: Question) {
    if (data.Id !== -1) {
      return await this.questionQuery.getById(data.Id).delete();
    }
    console.error('Invalid Question To Delete:', data);
  }

}
