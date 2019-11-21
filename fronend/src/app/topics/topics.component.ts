import { Component, OnInit } from '@angular/core';
import {UsersTables, SurveysService} from '../services/surveys.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  constructor(private userTables: SurveysService) {}
  ngOnInit() {
  }
}
