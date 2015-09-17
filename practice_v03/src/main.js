//  Your code here
var Person = function(age, name) {
	this._age = age;
	this._name = name;
};

Person.prototype.introduce = function() {
	return "My name is " + this._name + ". I am " + this._age + " years old.";
};


var Student = function(age, name, my_class) {
	Person.call(this, age, name);
	this._class = my_class;
};

Student.prototype.introduce = function() {
	return "I am a Student. I am at Class " + this._class + ".";
};


var Worker = function(age, name) {
	Person.call(this, age, name);
};

Worker.prototype.introduce = function() {
	return "I am a Worker. I have a job.";
};