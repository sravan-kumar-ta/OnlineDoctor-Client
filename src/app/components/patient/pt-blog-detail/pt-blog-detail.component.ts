import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-pt-blog-detail',
  templateUrl: './pt-blog-detail.component.html',
  styleUrls: ['./pt-blog-detail.component.css']
})
export class PtBlogDetailComponent implements OnInit {

  id: number = 0;
  post: any;
  like: any

  constructor(private route: ActivatedRoute, private service: PatientService) { }

  ngOnInit(): void {
    this.route.params.subscribe(obj => {
      this.id = obj['id'];
    })

    this.service.getPost(this.id).subscribe(data => {
      this.post = data;

      this.service.getLike(this.id).subscribe(data => {
        this.like = data;
      })

    })
  }

  like_or_dislike(id: number) {
    this.service.doLikeOrDislike(id).subscribe(data => {
      this.like = data;
    })
  }

}
