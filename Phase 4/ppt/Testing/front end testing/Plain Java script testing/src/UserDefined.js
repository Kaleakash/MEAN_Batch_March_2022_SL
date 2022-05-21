// ES5 style object creation 
function Customer(id,name) {
    this.id = id;
    this.name = name;
    this.getId= function(){
        return this.id;
    }
    this.getName= function() {
        return this.name;
    }

}

//ES6 style object creation 
class Employee {
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}