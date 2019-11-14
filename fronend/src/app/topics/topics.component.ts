import { Component, OnInit } from '@angular/core';
import {UsersTables, UsersTablesIfAdminService} from '../users-tables-if-admin.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  constructor(private userTables: UsersTablesIfAdminService) {}
  ngOnInit() {
  }
}
