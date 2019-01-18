import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  dataFiltered: Array<any> = [];
  URL = 'http://localhost:8080/api/events';

  constructor(private http: HttpClient) { }

  setFilteredArray (apiData: any) {
    return this.dataFiltered = apiData;
  }

  getEvents() {
    return this.http.get(`${this.URL}`);
  }

  getEventById (id: number) {
    const apiData = this.dataFiltered[id];
    return apiData;
  }

}
