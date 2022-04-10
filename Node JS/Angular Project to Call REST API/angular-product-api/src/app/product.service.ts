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

  // http post method take two parameter 1st parameter is url and 2nd parameter data in json format. 
  storeProduct(product:Product):Observable<any>{
    return this.http.post("http://localhost:3000/storeProduct",product);
  }

  deleteProduct(pid:number):Observable<any>{
    return this.http.delete("http://localhost:3000/deleteProductById/"+pid);
  }

  updateProductPrice(product:any):Observable<any>{
      return this.http.put("http://localhost:3000/updateProduct",product);
  }
}
