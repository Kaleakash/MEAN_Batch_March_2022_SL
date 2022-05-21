describe("Login Testing ",()=> {

    it("Login email and password testing success",()=> {
        var result = checkUserDetails("raj@gmail.com","123")
        expect(result).toBeTrue();
    })

    it("Login email and password testing failure",()=> {
        var result = checkUserDetails("raj@gmail.com","12366")
        expect(result).toBeFalse();
    })
})