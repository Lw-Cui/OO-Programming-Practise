//  Your code here
var Person = function(age, name) {
	this._age = age;
	this._name = name;
};

Person.prototype.introduce = function() {
	return "My name is " + this._name + ". I am " + this._age + " years old.";
};


var Class = function(number) {
	this._number = number;
	this._student = [];
	this.assginLeader = function(student) {
		if (student._class == this)
			this._leader = student;
		else
			console.log("It is not one of us.");
	};
	this.appendMember = function(student) {
		this._student.push(student);
	};
};

Class.prototype.isIn = function(student) {
	if (student._class == this)
		return true;
	else
		return false;
};

var Student = function(age, name, my_class) {
	Person.call(this, age, name);
	this._class = my_class;
	my_class.appendMember(this);
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function() {
	var intro = Person.prototype.introduce.call(this) + " I am a Student."
	if (this._class._leader == this)
		intro += " I am Leader of Class " + this._class._number + ".";
	else
		intro += " I am at Class " + this._class._number + ".";
	return intro
};


var Teacher = function(age, name, my_classes) {
	Person.call(this, age, name);
	this._classes = my_classes;
};

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;


Teacher.prototype.introduce = function() {
	var intro = Person.prototype.introduce.call(this) + " I am a teacher."
	if (this._classes != undefined && this._classes.length) {
		intro += " I teach Class";
		for (var i in this._classes)
			intro += " " + this._classes[i]._number + ",";
		intro = intro.substr(0, intro.length - 1) + '.';
	} else {
		intro += " I teach No Class.";
	}
	return intro;
};

Teacher.prototype.introduceWith = function(student) {
	var intro = Person.prototype.introduce.call(this) + " I am a teacher."
	if (this.isTeaching(student))
		intro += " I teach " + student._name + ".";
	else
		intro += " I don't teach " + student._name + ".";
	return intro;
};

Teacher.prototype.isTeaching = function(student) {
	for (var i in this._classes)
		if (this._classes[i].isIn(student))
			return true;
	return false;
};