import {Component, Input, OnInit} from '@angular/core';
import {TopicsForUsersService} from '../../services/topics-for-users.service';
import {Subscription} from 'rxjs';
import {TopicsForUsers} from '../../models/topics';

@Component({
  selector: 'app-question-from-the-topic',
  templateUrl: './question-from-the-topic.component.html',
  styleUrls: ['./question-from-the-topic.component.css']
})
export class QuestionFromTheTopicComponent implements OnInit {
  @Input() currentTopic: TopicsForUsers;
  constructor(private topicsForUsersService: TopicsForUsersService) { }

  ngOnInit() {
  }
  onSetActiveQuestion(tiopcId: string, currentQuestionId: number) {
    this.topicsForUsersService.setActiveQuestion(tiopcId, currentQuestionId);
  }
}
