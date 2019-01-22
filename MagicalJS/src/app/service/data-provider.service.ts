import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor(private http: HttpClient) { }


  getDataFirebase<T>(): Observable<any> {
    return this.http.get("https://magicaljs-a9b42.firebaseio.com/Topics.json");
  }
}
