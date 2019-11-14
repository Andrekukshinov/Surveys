import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageForTopicsComponent } from './page-for-topics.component';

describe('PageForTopicsComponent', () => {
  let component: PageForTopicsComponent;
  let fixture: ComponentFixture<PageForTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageForTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageForTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
