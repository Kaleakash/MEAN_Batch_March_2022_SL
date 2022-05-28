import { TestBed,fakeAsync} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(ProductService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it("testing fake product details ",(done)=> {
    // below code is asyn before getting the result testing finish
    service.loadProductDetails().subscribe(result=> {
      expect(20).toEqual(result.length);
      let product = result[0];
      expect(1).toEqual(product.id);
      expect("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops").toEqual(product.title);
      expect(109.95).toEqual(product.price);
      done(); // pause the code till this testing finish
    })

    
  });

});
