import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Array<Product>=[];
  constructor(public pser:ProductService) { }   // DI for Product Service 

  ngOnInit(): void {
  }
   // we are calling service method.
  loadProduct() {
    this.pser.loadProductDetails().subscribe(data=>this.products= data,error=>console.log(error),()=>console.log("completed"));  
  }

}
