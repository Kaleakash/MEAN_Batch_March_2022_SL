let obj = require("../src/Operation")
describe("Operation Testing ",()=> {

    it("Addition testing ",()=> {
        let result = obj.add(10,20);
        expect(30).toEqual(result);
    })

    it("Substraction testing ",()=> {
        let result = obj.sub(200,100);
        expect(100).toEqual(result);
    })
})