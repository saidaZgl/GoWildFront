import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CommentService {
  URL = 'http://localhost:8080/api/comments';
  comment: Comment;

  constructor(private http: HttpClient) { }

  public getComments() {
    return this.http.get(`${this.URL}`);
  }

  public getCommentById(id: number) {
    return this.http.get(`${this.URL}/${id}`);
  }

  public postComment() {
    return this.http.post(`${this.URL}`, this.comment);
  }

  public putComment(id: number) {
    return this.http.put(`${this.URL}/${id}`, this.comment);
  }

  public deleteComment(id: number) {
    return this.http.delete(`${this.URL}/${id}`);
  }

}

class Comment {
  content: String;
  liky = 0;
}
