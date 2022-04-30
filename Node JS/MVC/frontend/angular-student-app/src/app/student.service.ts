import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public http:HttpClient) { }   // DI for HttpClient 

  getAllStudentDetails():Observable<Student[]> {
   // fetch("http://localhost:3000/api/student/findAllStudent").then(result=>console.log(result)).catch()
   // this.http.get("http://localhost:3000/api/student/findAllStudent").subscribe(result=>console.log(result))
    return this.http.get<Student[]>("http://localhost:3000/api/student/findAllStudent");
  }

  storeStudentDetails(student:Student):Observable<string>{
    return this.http.post("http://localhost:3000/api/student/storeStudent",student,{responseType:'text'});
  }


  updateGrade(student:any):Observable<string>{
    return this.http.put("http://localhost:3000/api/student/updateStudentGrade",student,{responseType:'text'})
  }

  deleteStudentInfo(_id:number): Observable<string> {
    return this.http.delete("http://localhost:3000/api/student/deleteStudentInfo/"+_id,{responseType:'text'});
  }
  
}
