import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadScrumComponent } from './bread-scrum.component';

describe('BreadScrumComponent', () => {
  let component: BreadScrumComponent;
  let fixture: ComponentFixture<BreadScrumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadScrumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadScrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
