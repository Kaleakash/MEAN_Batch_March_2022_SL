import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("testing fake product details ",(finish)=> {
    // below code is asyn before getting the result testing finish
    service.loadProductDetails().subscribe(result=> {
      expect(10).toEqual(result.length);
      finish();
    },error=>console.log(error),()=> {
      
    })

    
  });

});
