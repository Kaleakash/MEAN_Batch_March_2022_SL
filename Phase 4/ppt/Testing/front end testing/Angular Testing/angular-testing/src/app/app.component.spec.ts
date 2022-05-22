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
    const fixture = TestBed.createComponent(AppComponent);  // we got the identity 
    const app = fixture.componentInstance;              // this line we will get the reference of app compoennt 
    expect(app).toBeTruthy();         // component created or not. 
  });

  it(`should have as title 'angular-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-testing');   // testing component variable value. 
  });

  it('Template or html code testing ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();        // load the component to get the update contents. 
    const compiled = fixture.nativeElement as HTMLElement;    // got the dom identity like document refere
   // expect(compiled.querySelector('.content span')?.textContent).toContain('angular-testing app is running!');
   expect(compiled.getElementsByTagName("h1")[0].textContent).toEqual("Welcome to Angular Testing...");
   expect(compiled.getElementsByTagName("p")[0].textContent).toEqual("Welcome user Ravi Kumar");
  });

  it("component property and function testing ",()=> {
    let obj = TestBed.createComponent(AppComponent).componentInstance;
    expect(100).toEqual(obj.id);
    expect("Ravi Kumar").toEqual(obj.name);
    expect(26).toBeGreaterThan(obj.age)
    expect(5).toEqual(obj.num.length);      // array variable size must be 5 
    let result = obj.sayHello("Ajay");
    expect(result).toContain("Ajay");       // Ajay name must be return it must be present anywhere in string. 
  })

});
