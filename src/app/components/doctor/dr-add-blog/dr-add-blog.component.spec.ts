import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrAddBlogComponent } from './dr-add-blog.component';

describe('DrAddBlogComponent', () => {
  let component: DrAddBlogComponent;
  let fixture: ComponentFixture<DrAddBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrAddBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrAddBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
