import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtProfileComponent } from './pt-profile.component';

describe('PtProfileComponent', () => {
  let component: PtProfileComponent;
  let fixture: ComponentFixture<PtProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
