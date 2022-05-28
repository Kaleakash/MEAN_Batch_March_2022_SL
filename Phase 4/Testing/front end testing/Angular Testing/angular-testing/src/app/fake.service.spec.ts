import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { FakeService } from './fake.service';

describe('FakeService', () => {
  let service: FakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(FakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("Fake Service ",(done)=> {
    service.loadFakeData().subscribe(result=> {
      expect(200).toEqual(result.length);
      done();
    })
  })
});
