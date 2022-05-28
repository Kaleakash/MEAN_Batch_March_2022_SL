import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FakeService } from './fake.service';
describe('FakeService', () => {
  let service: FakeService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]  // import HttpClientModule 
    });
    service = TestBed.inject(FakeService);    // pull Service class using 
  });                                         // inject method 
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it("Simple Service testing ",()=> {
    expect(service.sayHello()).toEqual("Welome to Service class");
  })
  it("Fake Rest API Testing ",(done)=> {
    service.getFakeData().subscribe(data=> {
      expect(data.length).toEqual(200);
      let fakeData = data[0];
      expect(fakeData.id).toEqual(1);
      expect(fakeData.title).toEqual("delectus aut autem");
      expect(fakeData.completed).toBeFalse();
      done();     // it is use to paush the code 
    })
  })

});
