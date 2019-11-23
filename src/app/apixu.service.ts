import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  // Please plug in your API key here
  // Example: private API_KEY = "f7bd31cd34a04177c786f86d6f893fc5";
  private API_KEY = "YOUR API KEY";

  constructor(private http: HttpClient) { }

  getWeather(location) {
    let api_url = `http://api.weatherstack.com/current?access_key=${this.API_KEY}&query=${location}`;
    // console.log('Api get:' + this.http.get(api_url));
    return this.http.get(api_url);
  }
}
