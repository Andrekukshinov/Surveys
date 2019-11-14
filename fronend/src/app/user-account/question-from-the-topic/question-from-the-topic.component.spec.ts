import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFromTheTopicComponent } from './question-from-the-topic.component';

describe('QuestionFromTheTopicComponent', () => {
  let component: QuestionFromTheTopicComponent;
  let fixture: ComponentFixture<QuestionFromTheTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionFromTheTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFromTheTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
