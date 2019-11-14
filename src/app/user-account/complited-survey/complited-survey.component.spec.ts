import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplitedSurveyComponent } from './complited-survey.component';

describe('ComplitedSurveyComponent', () => {
  let component: ComplitedSurveyComponent;
  let fixture: ComponentFixture<ComplitedSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplitedSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplitedSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
