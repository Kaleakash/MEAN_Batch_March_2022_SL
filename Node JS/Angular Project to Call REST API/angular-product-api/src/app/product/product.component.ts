import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productRef = new FormGroup({
    pid:new FormControl(),
    pname:new FormControl(),
    price : new FormControl(),
    url:new FormControl()
  });

  storeMsg:string="";
  deleteMsg:string ="";
  products:Array<Product>=[];
  flag:boolean =false;
  pid:number=0;
  price:number=0;
  updateMsg:string ="";
  constructor(public pser:ProductService) { }   // DI for Product Service 

  // This is life cycle method which get call automatically after component loaded... this function call only once 
  ngOnInit(): void {
    this.loadProduct();
  }
   // we are calling service method.
  loadProduct() {
    this.pser.loadProductDetails().subscribe(data=>this.products= data,error=>console.log(error),()=>console.log("completed"));  
  }

  storeProduct(){
    let product = this.productRef.value;
    //console.log(product);
    this.pser.storeProduct(product).subscribe(data=>this.storeMsg=data.msg,error=>console.log(error),()=>this.loadProduct());
    this.productRef.reset();    // reset the form value. 
  }
  deleteRecord(pid:number){
   // console.log(pid);
   this.pser.deleteProduct(pid).subscribe(data=>this.deleteMsg=data.msg,error=>console.log(error),()=>this.loadProduct())
  }

  updateRecord(product:Product){
    //console.log(product);
    this.pid=product.pid;
    this.price=product.price;
    this.flag=true;
  }

  updateProductDetals(){
    let product = {pid:this.pid,price:this.price};
    //console.log(product);
    this.pser.updateProductPrice(product).subscribe(data=>this.updateMsg=data.msg,error=>console.log(error),()=>this.loadProduct());
    this.flag=false;
    this.updateMsg="";
    
  }
}
