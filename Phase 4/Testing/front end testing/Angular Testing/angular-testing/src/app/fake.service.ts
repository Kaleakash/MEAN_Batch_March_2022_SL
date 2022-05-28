import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fake } from './fake';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  constructor(private http:HttpClient) { }


  loadFakeData() : Observable<Fake[]> {
    return this.http.get<Fake[]>("https://jsonplaceholder.typicode.com/todos")
  }

}
