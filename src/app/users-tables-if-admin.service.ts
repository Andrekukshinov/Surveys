import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersTablesForAdminService {
  public usersSurveys: UsersTables[] = [
    {
      nameOfSurvey: 'survey 1',
      numberOfQuestions: 25,
      timeForSurvey: 20,
      timeTillSurveyExpire: 15,
      author: 'limbo 1',
      availableForGuests: false,
    },
    {
      nameOfSurvey: 'survey 1',
      numberOfQuestions: 25,
      timeForSurvey: 20,
      timeTillSurveyExpire: 15,
      author: 'limbo 2',
      availableForGuests: false,
    },
    {
      nameOfSurvey: 'survey 1',
      numberOfQuestions: 25,
      timeForSurvey: 20,
      timeTillSurveyExpire: 15,
      author: 'limbo 3',
      availableForGuests: false,
    },
    {
      nameOfSurvey: 'survey 1',
      numberOfQuestions: 25,
      timeForSurvey: 20,
      timeTillSurveyExpire: 15,
      author: 'limbo 4',
      availableForGuests: false,
    },
    {
      nameOfSurvey: 'survey 1',
      numberOfQuestions: 25,
      timeForSurvey: 20,
      timeTillSurveyExpire: 15,
      author: 'limbo 5',
      availableForGuests: false,
    },
    {
      nameOfSurvey: 'survey 1',
      numberOfQuestions: 25,
      timeForSurvey: 20,
      timeTillSurveyExpire: 15,
      author: 'limbo 6',
      availableForGuests: false,
    },
    {
      nameOfSurvey: 'survey 1',
      numberOfQuestions: 25,
      timeForSurvey: 20,
      timeTillSurveyExpire: 15,
      author: 'limbo 7',
      availableForGuests: false,
    },
    {
      nameOfSurvey: 'survey 1',
      numberOfQuestions: 25,
      timeForSurvey: 20,
      timeTillSurveyExpire: 15,
      author: 'limbo 8',
      availableForGuests: false,
    },
    {
      nameOfSurvey: 'survey 1',
      numberOfQuestions: 25,
      timeForSurvey: 20,
      timeTillSurveyExpire: 15,
      author: 'limbo 9',
      availableForGuests: false,
    },
    {
      nameOfSurvey: 'survey 1',
      numberOfQuestions: 25,
      timeForSurvey: 20,
      timeTillSurveyExpire: 15,
      author: 'limbo 10',
      availableForGuests: false,
    },
    {
      nameOfSurvey: 'survey 1',
      numberOfQuestions: 25,
      timeForSurvey: 20,
      timeTillSurveyExpire: 15,
      author: 'limbo 11',
      availableForGuests: false,
    },
    {
      nameOfSurvey: 'survey 1',
      numberOfQuestions: 25,
      timeForSurvey: 20,
      timeTillSurveyExpire: 15,
      author: 'limbo 12',
      availableForGuests: false,
    },
    {
      nameOfSurvey: 'survey 1',
      numberOfQuestions: 25,
      timeForSurvey: 20,
      timeTillSurveyExpire: 15,
      author: 'limbo 13',
      availableForGuests: false,
    }
  ];

  constructor() {
  }
  public getTotalSize(isAdmin: boolean) {
    return this.usersSurveys.length;
  }
  private arrayRunner(beginingOfThePage: number, endingOfThePage: number): UsersTables[] {
    let surveysPage: UsersTables[] = [];
    for (let runner = beginingOfThePage; runner < endingOfThePage; ++runner) {
      surveysPage.push( this.usersSurveys[runner]);
    }
    return surveysPage;
  }
  private surveyPageMethod(page: number, pageItems: number): UsersTables[] {
    const beginingOfThePage = (pageItems * (page - 1));
    const endingOfThePage = (pageItems * (page));
    return this.arrayRunner(beginingOfThePage, endingOfThePage);
  }
  public getUserSurveys(isAdmin: boolean, page: number, pageItems: number) {
    let loacalUserArraySaver: UsersTables[];
    if (isAdmin === true){
      loacalUserArraySaver = this.usersSurveys;
    } else{

    }
    const size = this.usersSurveys.length;
    if ((page * pageItems ) <= size) {
      if (page != (size / pageItems)) {
        return this.surveyPageMethod(page, pageItems);
      } else {
        if ((page * pageItems ) == size) {
          return this.surveyPageMethod(page, pageItems);
        } else {
          if ((page * pageItems ) > size) {
            const beginingOfThePage = (page * (pageItems - 1));
            return this.arrayRunner(beginingOfThePage, size);
          }
        }
      }
    } else {
      const maxPage = Math.ceil(size / pageItems);
      const localItems = size - (((maxPage) - 1) * pageItems);
      const beginingOfThePage = (size - localItems);
      const endingOfThePage = (size);
      return this.arrayRunner(beginingOfThePage, endingOfThePage);
    }
  }
}

export interface UsersTables {
  nameOfSurvey: string;
  numberOfQuestions: number;
  timeForSurvey: number;
  timeTillSurveyExpire: number;
  author: string;
  availableForGuests: boolean;
}
