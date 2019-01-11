import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OpenDataParisServices {

  dataFiltered: Array<any> = [];
  URL = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=evenements-a-paris';

  todaysDate = new Date().toISOString();
  todaysDateAPIForm = this.todaysDate.slice(0, 10);
  currentYearAPIForm = this.todaysDateAPIForm.slice(0, 4);
  urlBase = `${this.URL}&q=date_start+%3C%3D+%23now()+AND+date_end+%3E%3D+%23now()&sort=-date_start&rows=2000`;
  // tslint:disable-next-line:max-line-length
  urlBaseWithoutDate = `${this.URL}&rows=1000&refine.date_start=${this.currentYearAPIForm}`;

  constructor(private http: HttpClient) { }

  getConcerts() {
    return this.http.get(`${this.urlBase}&refine.tags=concert`);
  }

  getExpositions() {
    return this.http.get(`${this.urlBase}&refine.tags=exposition`);
  }

  getTheaters() {
    return this.http.get(`${this.urlBase}&refine.tags=theatre`);
  }

  getClubbings() {
    return this.http.get(`${this.urlBase}&refine.tags=clubbing`);
  }

  getShows() {
    return this.http.get(`${this.urlBase}&refine.tags=spectacle`);
  }

  getCinemas() {
    return this.http.get(`${this.urlBase}&refine.tags=cinema`);
  }

  getConferences() {
    return this.http.get(`${this.urlBase}&refine.tags=conference`);
  }

  getAll() {
    console.log(`${this.urlBase}`);
    return this.http.get(`${this.urlBase}`);
  }

  getConcertsWD() {
    return this.http.get(`${this.urlBaseWithoutDate}&refine.tags=concert`);
  }

  getExpositionsWD() {
    return this.http.get(`${this.urlBaseWithoutDate}&refine.tags=exposition`);
  }

  getTheatersWD() {
    return this.http.get(`${this.urlBaseWithoutDate}&refine.tags=theatre`);
  }

  getClubbingsWD() {
    return this.http.get(`${this.urlBaseWithoutDate}&refine.tags=clubbing`);
  }

  getShowsWD() {
    return this.http.get(`${this.urlBaseWithoutDate}&refine.tags=spectacle`);
  }

  getCinemasWD() {
    return this.http.get(`${this.urlBaseWithoutDate}&refine.tags=cinema`);
  }

  getConferencesWD() {
    return this.http.get(`${this.urlBaseWithoutDate}&refine.tags=conference`);
  }

  getAllWD() {
    return this.http.get(`${this.urlBaseWithoutDate}`);
  }

  setFilteredArray (data: any) {
    return this.dataFiltered = data;
  }

  getEventById (id: number) {
    const data = this.dataFiltered[id];
    return data;
  }

}

