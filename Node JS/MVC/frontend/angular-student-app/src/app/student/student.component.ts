import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Student } from '../student';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

studentRef = new FormGroup({
  _id:new FormControl(),
  first_name:new FormControl(),
  last_name:new FormControl(),
  class:new FormControl(),
  grade:new FormControl(),
  age:new FormControl(),
  address:new FormControl()
});

gradeItem:Array<string>=["A+","A","B+","B","C"]
classItem:Array<number>=[1,2,3,4,5,6,7,8,9,10];

  students:Array<Student>=[];
  storeMsg:string="";
  constructor(public std_ser:StudentService) { }

  // This function get call automatically after component object created
  // it will call only once. 
  ngOnInit(): void {
    this.loadStudentDetails();
  }
  updateFlag:boolean = true;
  deleteMsg:string="";
  updateMsg:string ="";
  updateImg:string ="https://www.kindpng.com/picc/m/283-2834264_updates-icon-hd-png-download.png";
  loadStudentDetails() {
    
    this.std_ser.getAllStudentDetails().subscribe(result=> {
      this.students=result;
    },error=>console.log(error),
    ()=>console.log("completed"));

  }

  storeStudentInfo(){
    let student = this.studentRef.value;
    //console.log(student);
    this.std_ser.storeStudentDetails(student).subscribe(result=> {
      this.storeMsg=result;
    },error=> {
      this.storeMsg=error;
    },()=> {
      this.loadStudentDetails();
    })
    this.studentRef.reset();
  }

  updatedGrade:string=""
  gradeFunction(gradeRef:any){
    this.updatedGrade=gradeRef.value;
    console.log(this.updatedGrade);
  }
  updateStudentGrade(student:Student){
    if(this.updateFlag){
    this.updateFlag=false;
    this.updateImg="https://media.istockphoto.com/vectors/vector-illustration-modern-label-new-update-with-bell-web-banner-vector-id1314955051?b=1&k=20&m=1314955051&s=170667a&w=0&h=cM3NKq9dwKACsNQLQOAY5su3I2OUtMje5lisbdFVy3E=";
    }else {
      // we can update service method to update that specific records. 
      //console.log(student)
      student.grade = this.updatedGrade;
      this.std_ser.updateGrade(student).subscribe(result=> {
        this.updateMsg=result;
      },error=> {
        this.updateMsg=error
      },()=> {
        this.loadStudentDetails();
      })
    this.updateFlag=true;
    this.updateImg="https://www.kindpng.com/picc/m/283-2834264_updates-icon-hd-png-download.png"
    }
    // console.log(student);
  }

  deleteStudentRecord(_id:number){
    alert(_id);
    this.std_ser.deleteStudentInfo(_id).subscribe(result=> {
      this.deleteMsg=result;      
    },error=> {
      this.deleteMsg=error
    },()=> {
      this.loadStudentDetails();
    })
  }
}
