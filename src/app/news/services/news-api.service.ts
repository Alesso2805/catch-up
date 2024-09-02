import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  baseUrl = 'https://newsapi.org/v2';
  apiKey= '373bdc4ef54548be928b31d1a68698f3'

  constructor(private http: HttpClient) { }

  getSources() {
    return this.http.get(`${this.baseUrl}/sources?apiKey=${this.apiKey}`);
  }
}
