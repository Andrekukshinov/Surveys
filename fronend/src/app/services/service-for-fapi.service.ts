import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TopicsForUsers} from '../models/topics';
import {Surveys} from '../models/surveys';


@Injectable({
  providedIn: 'root'
})
export class ServiceForFapiService {

  constructor(private http: HttpClient) { }

  createSurvey(survey: Surveys): Observable<Surveys> {
    return this.http.post<Surveys>('/api/surveys', survey);
  }
  createTopic(topics: TopicsForUsers): Observable<TopicsForUsers> {
    return this.http.post<TopicsForUsers>('/api/topics', topics);
  }
  getTopics(): Observable<TopicsForUsers[]> {
    return this.http.get<TopicsForUsers[]>('/api/topics');
  }
  updateTopic(topic: TopicsForUsers): Observable<TopicsForUsers[]> {
    return this.http.put<TopicsForUsers[]>('/api/topics/' + topic.name, topic);
  }
}
