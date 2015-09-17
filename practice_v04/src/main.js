//  Your code here
var Person = function(age, name) {
	this._age = age;
	this._name = name;
};

Person.prototype.base_introduce = function() {
	return "My name is " + this._name + ". I am " + this._age + " years old.";
};

Person.prototype.introduce = function() {
	return this.base_introduce();
}



var Student = function(age, name, my_class) {
	Person.call(this, age, name);
	this._class = my_class;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function() {
	return this.base_introduce() + " I am a Student. I am at Class " + this._class + ".";
};



var Worker = function(age, name) {
	Person.call(this, age, name);
};

Worker.prototype = Object.create(Person.prototype);
Worker.prototype.constructor = Worker;

Worker.prototype.introduce = function() {
	return this.base_introduce() + " I am a Worker. I have a job.";
};