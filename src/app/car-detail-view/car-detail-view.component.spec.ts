import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailViewComponent } from './car-detail-view.component';

describe('CarDetailViewComponent', () => {
  let component: CarDetailViewComponent;
  let fixture: ComponentFixture<CarDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
