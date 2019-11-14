import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialTabulationComponent } from './special-tabulation.component';

describe('SpecialTabulationComponent', () => {
  let component: SpecialTabulationComponent;
  let fixture: ComponentFixture<SpecialTabulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialTabulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialTabulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
