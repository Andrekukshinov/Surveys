import {Component, Input, OnInit} from '@angular/core';
import {TopicsForUsers, TopicsForUsersService} from '../../topics-for-users.service';
import {Subscription} from 'rxjs';

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
