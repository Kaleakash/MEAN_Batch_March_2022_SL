import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-testing';
  id:number =100;
  name:string ="Ravi Kumar";
  age: number = 21;
  num:number[]=[10,20,30,40,50];

  sayHello(name:string):string {
    return "Welcome to Angular "+name;
  }
}
