import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UsersTables, SurveysService} from '../../services/surveys.service';

@Component({
  selector: 'app-users-surveys',
  templateUrl: './users-surveys.component.html',
  styleUrls: ['./users-surveys.component.css']
})
export class UsersSurveysComponent implements OnInit {
  private pageItems = 4;
  public usersSurveys: UsersTables[];
  private page: number;
  @Output() dismissTheModal = new EventEmitter();
  constructor(private userTables: SurveysService) {
    this.page = 1;
    this.loadPage();
  }
  dissmissingTheModal() {
    this.dismissTheModal.emit();
  }
  public loadPage() {
    this.usersSurveys = this.userTables.getUserSurveys(true, this.page, this.pageItems);
  }
  ngOnInit() {
  }
  public collectionSize() {
    return this.userTables.getTotalSize(true);
  }
  toChangePage() {
    this.loadPage();
  }
}
