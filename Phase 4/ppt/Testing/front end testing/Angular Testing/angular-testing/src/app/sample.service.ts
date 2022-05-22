import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }

  checkDetails(name:string,pass:string):string {
    if(name=="raj" && pass=="123"){
      return "success";
    }else {
      return "failure";
    }
  }
}
