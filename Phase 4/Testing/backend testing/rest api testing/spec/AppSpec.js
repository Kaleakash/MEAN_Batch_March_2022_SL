let app = require("../src/app");
let supertest = require("supertest");

describe("Http method testing ",()=> {

    it("Get method testing ",(done)=> {
        supertest(app).get("/msg").expect(200).expect(data=> {
            expect(data.text).toEqual("Welcome to Simple Rest API")
        }).end(err=> err? done.fail(err):done())
    })

    it("Get method testing with json data",(done)=> {
        supertest(app).get("/emp").expect(200).expect(data=> {
            let emp = data.body;    // json data from body part 
            expect(emp.id).toEqual(100);
            expect(emp.name).toEqual("Ravi");
            expect(emp.age).toEqual(22);

        }).end(err=> err? done.fail(err):done())
    })
})