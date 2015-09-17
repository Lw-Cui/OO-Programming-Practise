var Person = function(age, name) {
	this._age = age;
	this._name = name;
};

Person.prototype.introduce = function() {
	return "My name is " + this._name + ". I am " + this._age + " years old.";
};


var Class = function(number) {
	this._number = number;
	this.assginLeader = function(student) {
		this._leader = student;
	};
};

var Student = function(age, name, my_class) {
	Person.call(this, age, name);
	this._class = my_class;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function() {
	var intro = Person.prototype.introduce.call(this) + " I am a Student."
	if (this._class._leader == this)
		intro += " I am Leader of Class " + this._class._number + "."
	else
		intro += " I am at Class " + this._class._number + ".";
	return intro
};


var Teacher = function(age, name, my_class) {
	Person.call(this, age, name);
	this._class = my_class;
};

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;


Teacher.prototype.introduce = function() {
	var intro = Person.prototype.introduce.call(this) + " I am a teacher."
	if (this._class != undefined)
		intro += " I teach Class " + this._class + ".";
	else
		intro += " I teach No Class.";
	return intro;
};

Teacher.prototype.introduceWith = function(student) {
	var intro = Person.prototype.introduce.call(this) + " I am a teacher."
	if (this._class == student._class._number)
		intro += " I teach " + student._name + ".";
	else
		intro += " I don't teach " + student._name + ".";
	return intro;
};