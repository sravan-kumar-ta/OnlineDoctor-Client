import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtHomeComponent } from './pt-home.component';

describe('PtHomeComponent', () => {
  let component: PtHomeComponent;
  let fixture: ComponentFixture<PtHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
