import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-dr-blogs',
  templateUrl: './dr-blogs.component.html',
  styleUrls: ['./dr-blogs.component.css']
})
export class DrBlogsComponent implements OnInit {

  posts: any
  response: any;
  nextPage: number = 0;
  prevPage: number = 0;
  page: number = 1;
  totalPages: number = 0;

  constructor(private service:PatientService) { }

  ngOnInit(): void {
    this.getPosts(this.page);
  }

  getPosts(page: number){
    this.page = page;
    this.service.getAllBlogs(page).subscribe(data => {
      this.response = data;
      this.posts = this.response.results;

      if(this.response.next) {
        this.nextPage = page + 1;
      } else {
        this.nextPage = 0;
      }

      if(this.response.previous) {
        this.prevPage = page - 1;
      } else {
        this.prevPage = 0;
      }
      this.totalPages = Math.ceil(this.response.count / 6);
    })
  }

}
