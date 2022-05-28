import { Component } from '@angular/core';
import { Employee } from './employee.mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-testing-app';
  name:string ="Raj Deep";
  id:number =100;
  result :boolean = true;
  stdNames:Array<string>=["Ravi","Ramesh","Ajay","Vijay"];
  employees:Array<Employee>=[];
  constructor(){
    let emp1 = new Employee(1,"Ravi",21);
    let emp2 = new Employee(2,"Ajay",26);
    let emp3 = new Employee(3,"Vijay",28);
    this.employees.push(emp1);
    this.employees.push(emp2);
    this.employees.push(emp3);
  }

  sayHello(name:string):string {
    return "Welcome to angular testing "+name;
  }
}
