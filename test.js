let expect = chai.expect;
let a1 = [1, 2, 3, 14, 15, 17, ];
let a2 = [6, 19, 22, 30, 32, 35 ]

describe('MyFunctions', function(){
    describe('shuffle', function() {
        it('should shuffle the array', function() {
            var x = shuffle(a1);
            expect(x).to.have.all.members(a2);
        });

        it('should throw an error if the array stays in order', function() {
            expect(function(){
                shuffle(a1).to.eql(a2);
            }).to.throw(Error);
        })
    }); 
});