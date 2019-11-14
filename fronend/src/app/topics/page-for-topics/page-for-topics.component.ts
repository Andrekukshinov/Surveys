import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-for-topics',
  templateUrl: './page-for-topics.component.html',
  styleUrls: ['./page-for-topics.component.css']
})
export class PageForTopicsComponent implements OnInit {
  page = 1;
  constructor() { }

  ngOnInit() {
  }

}
