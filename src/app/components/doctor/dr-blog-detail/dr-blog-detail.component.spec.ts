import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrBlogDetailComponent } from './dr-blog-detail.component';

describe('DrBlogDetailComponent', () => {
  let component: DrBlogDetailComponent;
  let fixture: ComponentFixture<DrBlogDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrBlogDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrBlogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
