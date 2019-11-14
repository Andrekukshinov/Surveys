import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulSurveysComponent } from './successful-surveys.component';

describe('SuccessfulSurveysComponent', () => {
  let component: SuccessfulSurveysComponent;
  let fixture: ComponentFixture<SuccessfulSurveysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulSurveysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
