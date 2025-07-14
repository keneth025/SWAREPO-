import { IItems } from '@pnp/sp/items';
import { ContentType } from 'src/constant/app.constant';
import { SPModel } from '../data/model/_model';

export async function copyToClipBoard(Title: string, contentType: ContentType) {
  let val = window.location.href.split('#')[0];
  val += `#/learning-library`;
  const contentTypeQuery = 'ContentType=' + encodeURIComponent(contentType);
  const titleQuery = 'Title=' + encodeURIComponent(Title);
  val += `?${contentTypeQuery}&${titleQuery}`;
  await navigator.clipboard.writeText(val);
  this.snackBar.open('Link Copied!');
}

export function sortItems<T extends SPModel>(itemArr: T[]) {
  return itemArr.sort(
    (a, b) => {
      const titleA = a.Title.trim().toLowerCase();
      const titleB = b.Title.trim().toLowerCase();
      if (titleA > titleB) {
        return 1;
      }
      if (titleA < titleB) {
        return -1;
      }
      return 0;
    }
  );
}

export function totalDurationList(durationList: string[]) {
  const tempList = durationList.filter(e => e);
  const durationArr = tempList.map(e => e.split(':').map(i => parseInt(i.trim(), 10)));
  let totalMinutes = 0;
  let totalHours = 0;
  for (const [hours, minutes] of durationArr) {
    if (minutes) { totalMinutes += minutes; }
    if (hours) { totalHours += hours; }
  }
  totalHours += Math.floor(totalMinutes / 60);
  totalMinutes = (totalMinutes % 60);
  return `${totalHours}:${totalMinutes}`;
}

export function getDescriptionCount(htmlString: string) {
  const element = document.createElement('div');
  element.innerHTML = htmlString;
  return element.textContent.length;
}

export function getHTMLText(htmlString: string) {
  const tempElement = document.createElement('div');
  tempElement.innerHTML = htmlString;
  return tempElement.textContent;
}

export function splitString(inputStr: string, delimiter: string) {
  return inputStr ? inputStr.split(delimiter).map(e => e.trim()) : [];
}

export function convertToFilterMap<T>(listToMap: T[], keyField: string = 'Id'): { [key: number]: T } {
  return listToMap.reduce(
    (returnValue, element) => ({
      ...returnValue,
      [element[keyField]]: element
    }), {}
  );
}

export function convertToMap<T>(strArr: string[], listToMap: T[], fieldToCompare: string = 'Title'): { [key: string]: T } {
  return strArr.reduce(
    (returnValue, element) => ({
      ...returnValue,
      [element]: listToMap.find(e => e[fieldToCompare] === element)
    }), {}
  );
}

export function searchString(baseString: string, searchKeyWord: string): boolean {
  searchKeyWord = searchKeyWord || '';
  if (searchKeyWord.trim() !== '') {
    return baseString.toLowerCase().includes(searchKeyWord.toLowerCase());
  }
  return true;
}

export function validateEmailFormat(str: string): boolean {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(str);
}

export async function getAllData(queryItems: IItems) {
  let pagedData = await queryItems.getPaged();
  let returnData = [...pagedData.results];
  while (pagedData.hasNext) {
    pagedData = await pagedData.getNext();
    returnData = [...returnData, ...pagedData.results];
  }
  return returnData;
}
