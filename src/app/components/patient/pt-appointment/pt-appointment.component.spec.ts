import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtAppointmentComponent } from './pt-appointment.component';

describe('PtAppointmentComponent', () => {
  let component: PtAppointmentComponent;
  let fixture: ComponentFixture<PtAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
