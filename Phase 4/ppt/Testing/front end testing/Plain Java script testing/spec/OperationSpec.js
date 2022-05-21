describe("Operation Testing ",()=> {


        it("Addition Testing ",()=> {
            var result = add(10,20);
            expect(30).toEqual(result);
        })

        it("Substraction Testing ",()=> {
            var result = sub(100,50);
            expect(50).toEqual(result);
        })

        it("Multication Testing ",()=> {
            var result = mul(10,20);
            expect(200).toEqual(result);
        })

        it("Div Testing ",()=> {
            var result = div(100,2);
            expect(50).toEqual(result);
        })


})