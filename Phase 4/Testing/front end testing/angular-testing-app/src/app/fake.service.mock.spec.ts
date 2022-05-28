import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Fake } from './fake';
import { FakeService } from './fake.service';
describe('Fake Mock Service', () => {
  let service: FakeService;
  let httpMock : HttpTestingController;     // created the reference of HttpTestingController 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]             // import HttpClientModule 
    });
    service = TestBed.inject(FakeService);    // pull Service class using inject method
    httpMock = TestBed.inject(HttpTestingController);   // pull the HttpTestingController API 
  });                                          
    it("Fake Mock Rest API Testing ",(done)=> {
    service.getFakeData().subscribe(data=> {
      expect(data.length).toEqual(3);
        let fakeData = data[0];
            expect(fakeData.id).toEqual(1);
            expect(fakeData.title).toEqual("first message");
            expect(fakeData.completed).toBeTrue();
        done();     // it is use to paush the code 
    })
    // Fake Response will give by this below code 
    let res = httpMock.expectOne("https://jsonplaceholder.typicode.com/todos");
    let fake1:Fake={userId:100,id:1,title:"first message",completed:true};
    let fake2:Fake={userId:101,id:1,title:"second message",completed:false};
    let fake3:Fake={userId:102,id:2,title:"third message",completed:true};
    let fakeData:Array<Fake>=[fake1,fake2,fake3];
    res.flush(fakeData)
  })

  it("Fake Mock Rest API by passing Id",(done)=> {
      service.getFakeDataById(1).subscribe(data=> {

        expect(data.id).toEqual(123);
        expect(data.userId).toEqual(1);
        expect(data.title).toEqual("Hello");
        expect(data.completed).toBeTruthy();
        done();
      });
    
      
    let res = httpMock.expectOne("https://jsonplaceholder.typicode.com/todos/2");
    let fakeObject:Fake={userId:1,id:123,title:"Hello",completed:true};
    res.flush(fakeObject)
  })

});
