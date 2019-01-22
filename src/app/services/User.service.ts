import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL = 'http://localhost:8080/api/users';
  constructor(private http: HttpClient) {
  }
  getUser() {
    return this.http.get(`${this.URL}`);
    }
}
