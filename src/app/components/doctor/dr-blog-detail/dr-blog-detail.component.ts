import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-dr-blog-detail',
  templateUrl: './dr-blog-detail.component.html',
  styleUrls: ['./dr-blog-detail.component.css']
})
export class DrBlogDetailComponent implements OnInit {

  post_id: number = 0;
  post: any;
  like: any
  total_likes: number = 0;
  updation: boolean = false;
  author: boolean = false;
  author_id: number = 0;
  user_id: number = 0;
  user: any;

  shortLink: string = "";
  loading: boolean = false;
  file: any;

  updateForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    is_public: new FormControl('')
  })

  constructor(
    private route: ActivatedRoute,
    private service: PatientService,
    private auth: AuthService,
    private drService: DoctorService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(obj => {
      this.post_id = obj['id'];
    })

    this.service.getPost(this.post_id).subscribe(data => {
      this.post = data;
      this.post_id = this.post.id;
      this.author_id = this.post.author.id;
      this.total_likes = this.post?.total_likes;

      this.service.getLike(this.post_id).subscribe(data => {
        this.like = data;

        this.auth.getUser().subscribe(data => {
          this.user = data;
          this.user_id = this.user.id;

          if (this.user_id == this.author_id) {
            this.author = true;
          }
        })
      })

      this.updateForm = new FormGroup({
        title: new FormControl(this.post.title),
        content: new FormControl(this.post.content),
        is_public: new FormControl(this.post.is_public)
      })

    })
  }

  like_or_dislike(id: number) {
    this.service.doLikeOrDislike(id).subscribe(data => {
      this.like = data;
      this.total_likes = this.like.total_likes;
    })
  }

  getUpdateForm() {
    this.updation = true;
    this.author = false;
  }

  closeUpdateForm() {
    this.updation = false;
    this.author = true;
  }

  updatePost() {
    this.drService.updateBlog(this.updateForm.value, this.post_id).subscribe(data => {
      console.log(data);
      this.post = data;
      this.updation = false;
      this.author = true;
    })
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  onUpload() {
    this.loading = !this.loading;
    this.drService.updateImage(this.file, this.post_id).subscribe(
      (data: any) => {
        if (typeof (data) === 'object') {
          this.loading = false;
          this.post = data;
        }
      }
    );
  }

}