import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  baseUrl: string;

  constructor(private http: HttpClient, @Inject('API_BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getForCategory(categoryId: string): Observable<any> {
    return this.http.get(this.baseUrl + '/videos');
  }
}
