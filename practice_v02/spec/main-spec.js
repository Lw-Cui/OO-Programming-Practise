//  Your test here

describe('tests of practice 02', function () {

    it("Give person info and get introduce", function () {

        var person = new Person(21, "Tom");
        var intro = person.introduce();

        expect(intro).toBe("My name is Tom. I am 21 years old.");
    })

    it("Give student info get introduce", function() {

    	var student = new Student(18, "Lw", 2);
    	var intro = student.introduce();

    	expect(intro).toBe("I am a Student. I am at Class 2.");
    })

});