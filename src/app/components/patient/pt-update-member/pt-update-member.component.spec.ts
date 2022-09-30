import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtUpdateMemberComponent } from './pt-update-member.component';

describe('PtUpdateMemberComponent', () => {
  let component: PtUpdateMemberComponent;
  let fixture: ComponentFixture<PtUpdateMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtUpdateMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtUpdateMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
