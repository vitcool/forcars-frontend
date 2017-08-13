import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsViewComponent } from './cars-view.component';

describe('CarsViewComponent', () => {
  let component: CarsViewComponent;
  let fixture: ComponentFixture<CarsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
