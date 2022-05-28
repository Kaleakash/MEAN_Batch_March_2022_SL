import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductMockService {

  constructor(private http:HttpClient) { }

  loadProductDetails():Observable<Product[]>{
    return this.http.get<Product[]>("https://fakestoreapi.com/products")
  }
}
