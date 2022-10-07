import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrUserupdateComponent } from './dr-userupdate.component';

describe('DrUserupdateComponent', () => {
  let component: DrUserupdateComponent;
  let fixture: ComponentFixture<DrUserupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrUserupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrUserupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
