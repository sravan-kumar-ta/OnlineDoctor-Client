import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtBlogsComponent } from './pt-blogs.component';

describe('PtBlogsComponent', () => {
  let component: PtBlogsComponent;
  let fixture: ComponentFixture<PtBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtBlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
