import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);  // provide the identity which help to get the reference. 
    const app = fixture.componentInstance;    // app is reference component. 
    expect(app).toBeTruthy();         // referene created successfully...
  });


  it(`should have as title 'angular-testing-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-testing-app');
  });

  it("component property testing ",()=> {
    const obj = TestBed.createComponent(AppComponent).componentInstance;
    expect(obj.id).toEqual(100);
    expect(obj.name).toEqual("Raj Deep");
    expect(obj.result).toBeTrue();
    expect(obj.stdNames.length).toEqual(4);
    let employees = obj.employees;
    let emp = employees[0];
    expect(employees.length).toEqual(3);
    expect(emp.id).toEqual(1);
    expect(emp.name).toEqual("Ravi");
    expect(emp.age).toEqual(21);
    expect(obj.sayHello("Raj")).toContain("Raj")
  })


  it('template testing', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();    // changes must be updated in DOM. 
    const compiled = fixture.nativeElement as HTMLElement;  // dom reference. 
    expect(compiled.getElementsByTagName("h1")[0].innerText).toContain('Angular');
    expect(compiled.querySelector("#obj")?.textContent).toEqual("Welcome Raj Deep");
  });
  
});
