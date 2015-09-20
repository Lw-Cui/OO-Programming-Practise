//  Your test here
describe('tests of practice 01', function () {

    it("given Persion info get introduce", function () {

        var person = new Person(21, "Tom");
        var intro = person.introduce();

        expect(intro).toBe("My name is Tom. I am 21 years old.");
    })

    it("given Student info get introduce", function() {

    	var person = new Student(18, "lw", 2);
    	var intro = person.introduce();

    	expect(intro).toBe("My name is lw. I am 18 years old. I am a Student. I am at Class 2."); 
    })

    it("given teacher info get introduce", function() {

    	var person = new Teacher(20, "Jack", 2);
    	var intro = person.introduce();

    	expect(intro).toBe("My name is Jack. I am 20 years old. I am a teacher. I teach Class 2.");
    })

    it("given teacher info get introduce", function() {

    	var person = new Teacher(20, "Jack");
    	var intro = person.introduce();

    	expect(intro).toBe("My name is Jack. I am 20 years old. I am a teacher. I teach No Class.");
    })

});
