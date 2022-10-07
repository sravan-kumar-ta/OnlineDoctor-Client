import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrProfileComponent } from './dr-profile.component';

describe('DrProfileComponent', () => {
  let component: DrProfileComponent;
  let fixture: ComponentFixture<DrProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
