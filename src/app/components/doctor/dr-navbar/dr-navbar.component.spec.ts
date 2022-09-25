import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrNavbarComponent } from './dr-navbar.component';

describe('DrNavbarComponent', () => {
  let component: DrNavbarComponent;
  let fixture: ComponentFixture<DrNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
