import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fake } from './fake';

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  constructor(public http:HttpClient) { }

  sayHello() : string {
    return "Welome to Service class";
  }

  getFakeData():Observable<Fake[]> {
    return this.http.get<Fake[]>("https://jsonplaceholder.typicode.com/todos");
  }

  getFakeDataById(id:number):Observable<Fake>{
    return this.http.get<Fake>("https://jsonplaceholder.typicode.com/todos/"+2);
  }
}
