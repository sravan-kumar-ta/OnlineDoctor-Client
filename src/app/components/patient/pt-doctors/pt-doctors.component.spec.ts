import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtDoctorsComponent } from './pt-doctors.component';

describe('PtDoctorsComponent', () => {
  let component: PtDoctorsComponent;
  let fixture: ComponentFixture<PtDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtDoctorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
