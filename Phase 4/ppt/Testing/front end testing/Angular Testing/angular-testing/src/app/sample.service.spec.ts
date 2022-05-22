import { TestBed } from '@angular/core/testing';

import { SampleService } from './sample.service';

describe('SampleService', () => {
  let service: SampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleService);  // pull the service class object ie DI
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it("login testing ",()=> {
    let result1 = service.checkDetails("raj","123")
    let result2 = service.checkDetails("ram","567");
    expect("success").toEqual(result1);
    expect("failure").toEqual(result2);
  })

})