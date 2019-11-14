import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersTablesIfAdminService {
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
  public usersSurveysForEveryUser: UsersTables[] = [
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
    if (isAdmin === true) {
      return this.usersSurveys.length;
    } else {
      return this.usersSurveysForEveryUser.length;
    }
  }
  private arrayRunner(tables: UsersTables[], beginingOfThePage: number, endingOfThePage: number): UsersTables[] {
    const surveysPage: UsersTables[] = [];
    for (let runner = beginingOfThePage; runner < endingOfThePage; ++runner) {
      surveysPage.push( tables[runner]);
    }
    return surveysPage;
  }
  private surveyPageMethod(tables: UsersTables[], page: number, pageItems: number): UsersTables[] {
    const beginingOfThePage = (pageItems * (page - 1));
    const endingOfThePage = (pageItems * (page));
    return this.arrayRunner(tables, beginingOfThePage, endingOfThePage);
  }
  public getUserSurveys(isAdmin: boolean, page: number, pageItems: number) {
    let loacalUserArraySaver: UsersTables[];
    if (isAdmin) {
      loacalUserArraySaver = this.usersSurveys;
    } else {
      loacalUserArraySaver = this.usersSurveysForEveryUser;
    }
    const size = loacalUserArraySaver.length;
    if ((page * pageItems ) <= size) {
        return this.surveyPageMethod(loacalUserArraySaver, page, pageItems);
    } else {
      const maxPage = Math.ceil(size / pageItems);
      const localItems = size - (((maxPage) - 1) * pageItems);
      const beginingOfThePage = (size - localItems);
      const endingOfThePage = (size);
      return this.arrayRunner(loacalUserArraySaver, beginingOfThePage, endingOfThePage);
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
