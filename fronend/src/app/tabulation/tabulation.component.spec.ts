import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabulationComponent } from './tabulation.component';

describe('TabulationComponent', () => {
  let component: TabulationComponent;
  let fixture: ComponentFixture<TabulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
