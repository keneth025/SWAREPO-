import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NguCarouselConfig } from '@ngu/carousel';
import { CourseStatus } from 'src/app/core/data/model/course.model';
import { Curriculum } from 'src/app/core/data/model/curriculum.model';
import { ExamStatus } from 'src/app/core/data/model/exam.model';
import { Announcement } from 'src/app/core/data/model/others.model';
import { CourseService } from 'src/app/core/data/service/course.service';
import { CurriculumService } from 'src/app/core/data/service/curriculum.service';
import { ExamService } from 'src/app/core/data/service/exam.service';
import { MandatoryTrainingService } from 'src/app/core/data/service/mandatory-training.service';
import { OthersService } from 'src/app/core/data/service/others.service';
import { UserCourseService } from 'src/app/core/data/service/user-course.service';
import { UserExamService } from 'src/app/core/data/service/user-exam.service';
import { CurriculumDescriptionDialogComponent } from 'src/app/shared/dialog/curriculum-description-dialog/curriculum-description-dialog.component';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { UserFeedbackDialogComponent } from 'src/app/shared/dialog/user-feedback-dialog/user-feedback-dialog.component';
import { environment } from 'src/environments/environment';

interface MandatoryTrainingItem {
  Type: 'Course' | 'Exam';
  Name: string;
  DueDateString: string;
  Status: CourseStatus | ExamStatus;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private otherService: OthersService,
    private mandatoryTrainingService: MandatoryTrainingService,
    private courseService: CourseService,
    private examService: ExamService,
    private userCourseService: UserCourseService,
    private userExamService: UserExamService,
    private curriculumService: CurriculumService,
    private dialogService: DialogService,
    private router: Router,
  ) { }

  CourseStatus = CourseStatus;
  ExamStatus = ExamStatus;

  pageIsLoading = true;

  announcementCarousel: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 1,
    speed: 500,
    interval: { timing: 10000 },
    point: { visible: false },
    load: 2,
    loop: true,
    velocity: 0,
    touch: true,
  };

  curriculumCarousel: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
    slide: 3,
    speed: 500,
    interval: { timing: 10000 },
    point: { visible: false },
    load: 2,
    loop: true,
    velocity: 0,
    touch: true,
  };

  announcements: Announcement[] = [];
  mandatoryTrainings: MandatoryTrainingItem[] = [];
  featuredCurricula: Curriculum[] = [];

  supportName = environment.SupportName;
  supportName1 = environment.SupportName1;
  supportEmailAddress = environment.SupportMail;
  supportEmailAddress1 = environment.SupportMail1;

  ngOnInit(): void {
    this.initialLoad();
  }

  async initialLoad() {
    this.pageIsLoading = true;
    this.announcements = await this.otherService.getAnnouncements();
    await Promise.all([
      this.loadMandatorTrainings(),
      this.loadFeaturedCurriculum(),
    ]);
    this.pageIsLoading = false;
  }

  async loadMandatorTrainings() {
    const mandatoryTrainingList = await this.mandatoryTrainingService.getAll();
    await Promise.all([
      this.userCourseService.getAll(),
      this.userExamService.getAll(),
    ]);
    let courseIdArr: number[] = [];
    let examIdArr: number[] = [];

    for (const mandatoryTrainingItem of mandatoryTrainingList) {
      courseIdArr = [
        ...courseIdArr,
        ...Array.from(mandatoryTrainingItem.CoursesId),
      ];
      examIdArr = [
        ...examIdArr,
        ...Array.from(mandatoryTrainingItem.ExamsId),
      ];
    }
    const courseIdSet = new Set(courseIdArr);
    const examIdSet = new Set(examIdArr);

    const courseList = await this.courseService.getItemsByIdArr(Array.from(courseIdSet));
    const examList = await this.examService.getItemsByIdArr(Array.from(examIdSet));
    for (const courseItem of courseList) {
      courseItem.Record = await this.userCourseService.getItemByItemRecordId(courseItem.Id);
      const mandatoryTrainingDetail = mandatoryTrainingList.find(e => e.CoursesId.has(courseItem.Id));
      this.mandatoryTrainings.push({
        Type: 'Course',
        Name: courseItem.Title,
        Status: courseItem.Status,
        DueDateString: mandatoryTrainingDetail.DateDueDate,
      });
    }
    for (const examItem of examList) {
      examItem.Record = await this.userExamService.getItemByItemRecordId(examItem.Id);
      const mandatoryTrainingDetail = mandatoryTrainingList.find(e => e.ExamsId.has(examItem.Id));
      this.mandatoryTrainings.push({
        Type: 'Exam',
        Name: examItem.Title,
        Status: examItem.Status,
        DueDateString: mandatoryTrainingDetail.DateDueDate,
      });
    }
  }

  async loadFeaturedCurriculum() {
    const featuredCurriculumList = await this.otherService.getFeaturedCurriculum();
    const curriculumIdArr = featuredCurriculumList.map(e => e.CurriculumId);
    let curriculumList = await this.curriculumService.getItemsByIdArr(curriculumIdArr);
    if (curriculumList.length % 3 !== 0 ) {
      const tempArr = new Array(3 - (curriculumList.length % 3)).fill({ filler: true });
      curriculumList = curriculumList.concat(tempArr);
    }
    this.featuredCurricula = curriculumList;
  }

  displayCurriculumDescription(item: Curriculum): void {
    const courseDescriptionDialog$ = this.dialogService.open(CurriculumDescriptionDialogComponent, { data: { item } });
  }

  goToCourseLibrary(field: string, data: any) {
    this.router.navigate(['learning-library'], { queryParams: { [field]: data, ['ContentType']: 'Courses' } });
  }

  goToExamLibrary(field: string, data: any) {
    this.router.navigate(['learning-library'], { queryParams: { [field]: data, ['ContentType']: 'Exams' } });
  }

  submitForm() {
    const editDialog = this.dialogService.open(UserFeedbackDialogComponent);
  }

}
