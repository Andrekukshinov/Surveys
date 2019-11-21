import {Questions} from './questions';

export class Surveys {
  id: number;
  questions: Questions[];
  author: string;
  creationTime: number;
  availabilityTime: number;
  surveyTitle: string;
  description: string;

  public getId(): number {
    return this.id;
  }

  public getQuestions(): Questions[] {
    return this.questions;
  }

  public getAuthor(): string {
    return this.author;
  }

  public getCreationTime(): number {
    return this.creationTime;
  }

  public getAvailabilityTime(): number {
    return this.availabilityTime;
  }

  public getSurveyTitle(): string {
    return this.surveyTitle;
  }

  public getDescription(): string {
    return this.description;
  }

}
