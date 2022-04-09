import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }



  // loadProductDetails() {
  //   this.http.get("http://localhost:3000/allProducts").subscribe(data=>console.log(data),
  //                                                   error=>console.log(error),
  //                                                   ()=>console.log("completed"));
  // }

  loadProductDetails():Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3000/allProducts");
  }
}
