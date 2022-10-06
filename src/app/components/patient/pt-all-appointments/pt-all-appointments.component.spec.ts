import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtAllAppointmentsComponent } from './pt-all-appointments.component';

describe('PtAllAppointmentsComponent', () => {
  let component: PtAllAppointmentsComponent;
  let fixture: ComponentFixture<PtAllAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtAllAppointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtAllAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
