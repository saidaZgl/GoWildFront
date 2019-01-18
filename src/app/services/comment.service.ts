import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CommentService {
  URL = 'http://localhost:8080/api/comments';

  constructor(private http: HttpClient) { }

  public getComments() {
    return this.http.get(`${this.URL}`);
  }

}
