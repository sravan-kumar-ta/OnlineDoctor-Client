import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-dr-blog-detail',
  templateUrl: './dr-blog-detail.component.html',
  styleUrls: ['./dr-blog-detail.component.css']
})
export class DrBlogDetailComponent implements OnInit {

  id: number = 0;
  post: any;
  like: any
  total_likes: number = 0;

  constructor(private route: ActivatedRoute, private service: PatientService) { }

  ngOnInit(): void {
    this.route.params.subscribe(obj => {
      this.id = obj['id'];
    })

    this.service.getPost(this.id).subscribe(data => {
      this.post = data;
      this.total_likes = this.post?.total_likes;

      this.service.getLike(this.id).subscribe(data => {
        this.like = data;
      })

    })
  }

  like_or_dislike(id: number) {
    this.service.doLikeOrDislike(id).subscribe(data => {
      this.like = data;
      this.total_likes = this.like.total_likes;
    })
  }

}