import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtUpdateUserComponent } from './pt-update-user.component';

describe('PtUpdateUserComponent', () => {
  let component: PtUpdateUserComponent;
  let fixture: ComponentFixture<PtUpdateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtUpdateUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtUpdateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
