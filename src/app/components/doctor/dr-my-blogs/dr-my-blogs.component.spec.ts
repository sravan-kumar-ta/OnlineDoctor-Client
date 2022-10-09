import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrMyBlogsComponent } from './dr-my-blogs.component';

describe('DrMyBlogsComponent', () => {
  let component: DrMyBlogsComponent;
  let fixture: ComponentFixture<DrMyBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrMyBlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrMyBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
