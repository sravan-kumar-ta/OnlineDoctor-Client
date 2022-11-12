import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GloballVar } from './globallVariable';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  
  // domain: string = 'http://127.0.0.1:8000/api'
  // domain: string = 'https://online-doctor-x.herokuapp.com/api'
  domain: string = this.globall.domain

  constructor(private http: HttpClient, private globall: GloballVar) { }

  getAllBlogs(pageNumber: number) {
    let url = `${this.domain}/posts/`
    return this.http.get(url, {params:{page:pageNumber}});
  }

  getPost(id: number){
    let url = `${this.domain}/posts/${id}/`
    return this.http.get(url);
  }

  getLike(id: number){
    let url = `${this.domain}/posts/${id}/liked_or_not/`
    return this.http.get(url);
  }

  doLikeOrDislike(id: number){
    let url = `${this.domain}/posts/${id}/like_or_dislike/`
    return this.http.get(url);
  }
  
  getMyBlogs(pageNumber: number) {
    let url = `${this.domain}/posts/get_my_posts/`
    return this.http.get(url, { params: { page: pageNumber } });
  }

  createBlog(data: any) {
    let url = `${this.domain}/posts/`
    return this.http.post(url, data)
  }

  updateBlog(data: any, id: number) {
    let url = `${this.domain}/posts/${id}/`
    return this.http.patch(url, data)
  }

  updateImage(file: any, id: number) {
    let url = `${this.domain}/posts/${id}/`
    const formData = new FormData();
    formData.append("image", file, file.name);
    return this.http.patch(url, formData)
  }
}
