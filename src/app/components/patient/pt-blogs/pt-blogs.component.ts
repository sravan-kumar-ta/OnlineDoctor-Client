import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-pt-blogs',
  templateUrl: './pt-blogs.component.html',
  styleUrls: ['./pt-blogs.component.css']
})
export class PtBlogsComponent implements OnInit {

  posts: any
  response: any;
  nextPage: number = 0;
  prevPage: number = 0;

  constructor(private service:PatientService) { }

  ngOnInit(): void {
    this.getPosts(1);
  }

  getPosts(page: number){
    this.service.getAllBlogs(page).subscribe(data => {
      this.response = data;
      this.posts = this.response.results;

      if(this.response.next) {
        this.nextPage = this.response.next.slice(-1);
      } else {
        this.nextPage = 0;
      }

      if(this.response.previous) {
        this.prevPage = Math.abs(this.nextPage - 2)
      } else {
        this.prevPage = 0;
      }
    })
  }

}
