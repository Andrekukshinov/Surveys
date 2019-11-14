import { Component, OnInit } from '@angular/core';
import {UsersTables, UsersTablesIfAdminService} from '../users-tables-if-admin.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  private pageItems = 4;
  public usersSurveys: UsersTables[];
  private page: number;
  constructor(private userTables: UsersTablesIfAdminService) {
    this.page = 1;
    this.loadPage();
  }
  public loadPage() {
    this.usersSurveys = this.userTables.getUserSurveys(false, this.page, this.pageItems);
  }
  ngOnInit() {
  }
  public collectionSize() {
    return this.userTables.getTotalSize(false);
  }
  toChangePage() {
    this.loadPage();
  }
  public getSize(): number {
    return this.usersSurveys.length;
  }
}
