import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTopicComponent } from './one-topic.component';

describe('OneTopicComponent', () => {
  let component: OneTopicComponent;
  let fixture: ComponentFixture<OneTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
