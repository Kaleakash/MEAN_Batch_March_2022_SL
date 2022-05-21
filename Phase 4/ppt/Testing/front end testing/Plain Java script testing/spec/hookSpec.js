describe("Hook Testing ",()=> {

    beforeEach(()=> {
        console.log("Before each it. it will call ")
    })

    beforeAll(()=> {
        console.log("Before all it. it will call only once")
    })

    it("first function testing ",()=> {
        console.log("while first testing")
        expect(true).toBeTrue();
    })

    it("second function testing ",()=> {
        console.log("while second testing")
        expect(false).toBeFalse();
    })

    afterAll(()=> {
        console.log("After all it. it will call only once")
    })

    afterEach(()=> {
        console.log("After each it. it will call ")
    })
})