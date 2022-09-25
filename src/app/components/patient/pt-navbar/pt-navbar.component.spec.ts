import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtNavbarComponent } from './pt-navbar.component';

describe('PtNavbarComponent', () => {
  let component: PtNavbarComponent;
  let fixture: ComponentFixture<PtNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
