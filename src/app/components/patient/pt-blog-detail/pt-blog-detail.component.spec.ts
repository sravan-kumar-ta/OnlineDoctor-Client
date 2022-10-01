import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtBlogDetailComponent } from './pt-blog-detail.component';

describe('PtBlogDetailComponent', () => {
  let component: PtBlogDetailComponent;
  let fixture: ComponentFixture<PtBlogDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtBlogDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtBlogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
