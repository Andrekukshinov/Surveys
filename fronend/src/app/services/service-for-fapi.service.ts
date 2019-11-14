import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TopicsForUsers} from '../topics-for-users.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceForFapiService {

  constructor(private http: HttpClient) { }
  getTopics(): Observable<TopicsForUsers[]> {
    return this.http.get<TopicsForUsers[]>('/api/topics');
  }
}
