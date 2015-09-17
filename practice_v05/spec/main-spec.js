
//  Your test here
describe('tests of practice 01', function () {

    it("given Persion with age=21 and name is Tom, get introduce", function () {

        var person = new Person(21, "Tom");
        var intro = person.introduce();

        expect(intro).toBe("My name is Tom. I am 21 years old.");
    })

    it("given Student with age=18 and name is lw, get introduce", function() {

    	var person = new Student(18, "lw", 2);
    	var intro = person.introduce();

    	expect(intro).toBe("My name is lw. I am 18 years old. I am a Student. I am at Class 2."); 
    })

    it("given worker with age=20 and name is Jack, get introduce", function() {

    	var person = new Worker(20, "Jack");
    	var intro = person.introduce();

    	expect(intro).toBe("My name is Jack. I am 20 years old. I am a Worker. I have a job.");
    })

});