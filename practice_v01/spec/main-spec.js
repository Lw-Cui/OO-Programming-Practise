//  Your test here

describe('tests of practice 01', function () {

    it("Give person info and get his/her introduce", function () {

        var person = new Person(21, "Tom");
        var intro = person.introduce();

        expect(intro).toBe("My name is Tom. I am 21 years old.");
    })

});