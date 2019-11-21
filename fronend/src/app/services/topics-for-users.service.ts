import {Injectable} from '@angular/core';
import {SubjectSubscription} from 'rxjs/internal-compatibility';
import {BehaviorSubject, Observable, ReplaySubject, Subject, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ServiceForFapiService} from './service-for-fapi.service';
import {TopicsForUsers} from '../models/topics';
import {Questions} from '../models/questions';
import {Surveys} from '../models/surveys';

@Injectable({
  providedIn: 'root'
})
export class TopicsForUsersService {
  private activeQuestion: Subject<Questions> = new ReplaySubject(1);
  private activeTopic: Subject<TopicsForUsers> = new ReplaySubject(1);
  private defaultTopicsForUsers: TopicsForUsers[] = [];
  private topicsForUsers: ReplaySubject<TopicsForUsers[]> = new ReplaySubject(1);
  private survey: Surveys[] = [];

  constructor(private serviceForFapiService: ServiceForFapiService) {
    this.serviceForFapiService.getTopics().subscribe((topics) => {
        this.topicsForUsers.next(topics);
        this.defaultTopicsForUsers = topics;
      }
    );
  }

  public sendSurveyToFapiService(survey: Surveys) {
    this.serviceForFapiService.createSurvey(survey);
  }

  getTopics(): Observable<TopicsForUsers[]> {
    return this.topicsForUsers.asObservable();
  }

  createTopic(topic: TopicsForUsers): void {
    this.serviceForFapiService.createTopic(topic).subscribe(topicFromFapi =>
      this.defaultTopicsForUsers.push(topicFromFapi)
    );
  }

  transferRequiredTopics(): TopicsForUsers[] {
    return this.defaultTopicsForUsers;
  }

  setActiveQuestion(topicId: string, questionId: number): void {
    const activeTopic = this.defaultTopicsForUsers.find(topicActive => topicActive.topicId === topicId);
    const activeQuestion = activeTopic.questions.find(currentQuestion => currentQuestion.id === questionId);
    this.activeQuestion.next(activeQuestion);
  }

  getActiveQuestionCallInComponents(): Observable<Questions> {
    return this.activeQuestion.asObservable();
  }

  setActiveTopicByTopicId(topicId: string): void {
    const activeTopic = this.defaultTopicsForUsers.find((currentTopic) => currentTopic.topicId == topicId);
    this.activeTopic.next(activeTopic);
  }

  getActiveTopic(): Observable<TopicsForUsers> {
    return this.activeTopic.asObservable();
  }
}


// todo change the question field and change total logic




