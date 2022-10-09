import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrBlogsComponent } from './dr-blogs.component';

describe('DrBlogsComponent', () => {
  let component: DrBlogsComponent;
  let fixture: ComponentFixture<DrBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrBlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
