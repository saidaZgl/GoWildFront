import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentModel } from '../models/comment';

@Injectable({
  providedIn: 'root'
})

export class CommentService {
  URL = 'http://localhost:8080/api/comments';

  constructor(private http: HttpClient) { }

  public getComments() {
    return this.http.get(`${this.URL}`);
  }

  public getCommentById(id: number) {
    return this.http.get(`${this.URL}/${id}`);
  }

  public postComment(comment: CommentModel) {
    return this.http.post(`${this.URL}`, comment);
  }

  public putComment(comment: CommentModel) {
    return this.http.put(`${this.URL}/${comment.id}`, comment);
  }

  public deleteComment(id: number) {
    return this.http.delete(`${this.URL}/${id}`);
  }

}
