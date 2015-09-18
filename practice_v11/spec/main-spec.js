//  Your test here
describe('tests of practice 07', function () {

    it("given Persion with age=21 and name is Tom, get introduce", function () {

        var person = new Person(21, "Tom");
        var intro = person.introduce();

        expect(intro).toBe("My name is Tom. I am 21 years old.");
    })


    it("given Student with age=18 and name is lw, get introduce (about class)", function() {

    	var my_class = new Class(3);
    	var teacher = new Teacher(20, "Jack", [my_class]);
    	var student = new Student(18, "lw", my_class);
    	var intro = my_class.appendMember(student);

    	expect(intro).toBe("I am Jack. I know lw has joined Class 3."); 

    	var intro = student.introduce();
    	expect(intro).toBe("My name is lw. I am 18 years old. I am a Student. I am at Class 3."); 

    	var intro = my_class.assginLeader(student);
    	expect(intro).toBe("I am Jack. I know lw become Leader of Class 3."); 


    	var intro = student.introduce();
    	expect(intro).toBe("My name is lw. I am 18 years old. I am a Student. I am Leader of Class 3.");

    	var your_class = new Class(2);
    	var new_student = new Student(18, "lw", your_class);
    	my_class.assginLeader(new_student);
    	var intro = new_student.introduce();
    	expect(intro).toBe("My name is lw. I am 18 years old. I am a Student. I am at Class 2."); 
    })    


    it("given teacher with age=20 and name is Jack, get introduce (Class 2 or No Class)", function() {

    	var my_class_1 = new Class(2);
    	var my_class_2 = new Class(3);

    	var person = new Teacher(20, "Jack", [my_class_1, my_class_2]);
    	var intro = person.introduce();
    	expect(intro).toBe("My name is Jack. I am 20 years old. I am a teacher. I teach Class 2, 3.");

    	var person = new Teacher(20, "Jack");
    	var intro = person.introduce();
    	expect(intro).toBe("My name is Jack. I am 20 years old. I am a teacher. I teach No Class.");
    })
    


    it("given teacher with age=20 and name is Jack, get introduce", function() {

    	var my_class = new Class(2);
    	var your_class = new Class(3);
    	var student = new Student(18, "lw", my_class);

    	var person = new Teacher(20, "Jack", [my_class, your_class]);
    	var intro = person.introduceWith(student);
    	expect(intro).toBe("My name is Jack. I am 20 years old. I am a teacher. I teach lw.");
    	
    	var person = new Teacher(20, "Jack");
    	var intro = person.introduceWith(student);
    	expect(intro).toBe("My name is Jack. I am 20 years old. I am a teacher. I don't teach lw.");

    	var person = new Teacher(20, "Jack", [your_class]);
    	var intro = person.introduceWith(student);
    	expect(intro).toBe("My name is Jack. I am 20 years old. I am a teacher. I don't teach lw.");
    })


});