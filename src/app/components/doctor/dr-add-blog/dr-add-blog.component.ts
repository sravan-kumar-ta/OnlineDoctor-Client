import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-dr-add-blog',
  templateUrl: './dr-add-blog.component.html',
  styleUrls: ['./dr-add-blog.component.css']
})
export class DrAddBlogComponent implements OnInit {

  blogForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    is_public: new FormControl(''),
  })

  created_post: any;

  constructor(private service: BlogService, private router: Router) { }

  ngOnInit(): void {
  }

  createBlog() {
    this.service.createBlog(this.blogForm.value).subscribe(data => {
      this.created_post = data;
      const post_id = this.created_post.id;
      this.router.navigate(['/', 'doctor', 'blogs', post_id])
    })
  }

}
