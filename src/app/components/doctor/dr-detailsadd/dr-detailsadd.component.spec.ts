import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrDetailsaddComponent } from './dr-detailsadd.component';

describe('DrDetailsaddComponent', () => {
  let component: DrDetailsaddComponent;
  let fixture: ComponentFixture<DrDetailsaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrDetailsaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrDetailsaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
