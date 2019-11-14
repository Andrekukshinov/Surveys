import { Injectable } from '@angular/core';
import {SubjectSubscription} from 'rxjs/internal-compatibility';
import {Observable, ReplaySubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicsForUsersService {
  private activeQuestion: Subject<Questions> = new ReplaySubject(1);
  private activeTopic: Subject<TopicsForUsers> = new ReplaySubject(1);
  //todo dlt & w8 4 response from server, when it is ready
  topicsForUsers: TopicsForUsers[] = [
    {
      questions: [
        {
          id: 0,
          questionField: 'How much ...',
          answers: ['1', '2']
        },
        {
          questionField: 'How many ...',
          id: 1,
          answers: ['3', '4']
        },
        {
          id: 2,
          questionField: 'Where ...',
          answers: ['5', '6']
        },
        {
          id: 3,
          questionField: 'When  ...',
          answers: ['7', '8']
        }
      ],
      name: 'cars',
      topicId: '0',
    },
    {
      questions: [
        {
          id: 4,
          questionField: 'How much time...',
          answers: ['9', '10', '5678']
        },
        {
          id: 5,
          questionField: 'How many days...',
          answers: ['11', '12']
        },
        {
          id: 6,
          questionField: 'Where have...',
          answers: ['13', '14']
        },
        {
          id: 7,
          questionField: 'When did you last ...',
          answers: ['15', '16']
        }
      ],
      name: 'animals',
      topicId: '1',
    },
    {
      questions: [
        {
          id: 8,
          questionField: 'How much time are you gonna...',
          answers: ['17', '18']
        },
        {
          id: 9,
          questionField: 'How many days will you...',
          answers: ['19', '20']
        },
        {
          id: 10,
          questionField: 'Where have you left them...',
          answers: ['21', '22']
        },
        {
          id: 11,
          questionField: 'When did you last see her...',
          answers: ['23', '24']
        }
      ],
      name: 'space',
      topicId: '3',
    },

  ];
  //ends here
  constructor() { }
  getTopics(): TopicsForUsers[] {
    return this.topicsForUsers;
  }
  setActiveQuestion(tiopcId: string, questionId: number): void {
    const activeTopic = this.topicsForUsers.find( topicActive => topicActive.topicId === tiopcId);
    const activeQuestion = activeTopic.questions.find( currentQuestion => currentQuestion.id === questionId);
    this.activeQuestion.next(activeQuestion);
  }
  getActiveQuestion(): Observable<Questions> {
    return this.activeQuestion.asObservable();
  }
  setActvieTopicByTopicId(topicId: string): void {
    const activeTopic = this.topicsForUsers.find((currentTopic) => currentTopic.topicId === topicId);
    this.activeTopic.next(activeTopic);
  }
  getActiveTopic(): Observable<TopicsForUsers> {
    return this.activeTopic.asObservable();
  }
}




//todo change the question field and change total logic
export interface TopicsForUsers {
  name: string;
  topicId: string;
  questions: Questions[];
}

export interface Questions {
  id: number;
  questionField: string;
  answers: string[];
}
