describe("User Defined Object Testing ",()=> {


    it("ES5 style object creation ",()=> {
        var obj = new Customer(100,"Ramesh");
        expect("Ramesh").toEqual(obj.getName());
        expect(100).toEqual(obj.getId())
    })

    it("E6 style objection reation ",()=> {
         let obj = new Employee(101,"Ajay");
         expect("Ajay").toEqual(obj.getName());
         expect(101).toEqual(obj.getId())
    })
})