import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Product } from './product';
import { ProductMockService } from './product-mock.service';
describe('ProductMockService', () => {
  let service: ProductMockService;
  let httpMock: HttpTestingController; // create the reference of type HttpTestingController    
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]   //plz imports 
    });
    service = TestBed.inject(ProductMockService);
    httpMock= TestBed.inject(HttpTestingController);  // pull the object.   
    
   });
  
  it("Fake Product Service Mock Object ",(done)=> {
    service.loadProductDetails().subscribe(result=> {
      expect(3).toEqual(result.length);
      let product = result[0];
      expect(1).toEqual(product.id);
      expect("A").toEqual(product.title)
      done();
    })
    // Fake Response for Product REST API 
    let res = httpMock.expectOne("https://fakestoreapi.com/products");
    let p1:Product = {id:1,title:"A",price:10,description:"Abc",category:"AA",image:"www.image1.com",rating:{rate:1,count:1}}
   let p2:Product = {id:2,title:"B",price:20,description:"Abcd",category:"BB",image:"www.image2.com",rating:{rate:2,count:2}}
   let p3:Product = {id:3,title:"C",price:30,description:"Abcde",category:"CC",image:"www.image3.com",rating:{rate:3,count:3}}
   let products:Array<Product>=[p1,p2,p3];
   res.flush(products);   // it it use to provide the fake data to testing method. 
  })
  
});
