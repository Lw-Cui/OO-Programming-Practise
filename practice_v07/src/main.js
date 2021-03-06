// Generated by CoffeeScript 1.10.0
var Class, Person, Student, Teacher, Worker,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Person = (function() {
  function Person(age, name) {
    this.age = age;
    this.name = name;
  }

  Person.prototype.introduce = function() {
    return "My name is " + this.name + ". I am " + this.age + " years old.";
  };

  return Person;

})();

Student = (function(superClass) {
  extend(Student, superClass);

  function Student(age, name, my_class) {
    Student.__super__.constructor.call(this, age, name);
    this["class"] = my_class;
  }

  Student.prototype.introduce = function() {
    return Student.__super__.introduce.apply(this, arguments) + (" I am a Student. I am at Class " + this["class"].number + ".");
  };

  return Student;

})(Person);

Worker = (function(superClass) {
  extend(Worker, superClass);

  function Worker(age, name) {
    Worker.__super__.constructor.call(this, age, name);
  }

  Worker.prototype.introduce = function() {
    return Worker.__super__.introduce.apply(this, arguments) + " I am a Worker. I have a job.";
  };

  return Worker;

})(Person);

Teacher = (function(superClass) {
  extend(Teacher, superClass);

  function Teacher(age, name, my_class) {
    Teacher.__super__.constructor.call(this, age, name);
    this["class"] = my_class;
  }

  Teacher.prototype.introduce = function() {
    var intro;
    intro = Teacher.__super__.introduce.apply(this, arguments) + " I am a teacher.";
    if (this["class"] != null) {
      intro += " I teach Class " + this["class"] + ".";
    }
    if (this["class"] == null) {
      intro += " I teach No Class.";
    }
    return intro;
  };

  Teacher.prototype.introduceWith = function(student) {
    var intro;
    intro = this.__proto__.__proto__.introduce.apply(this) + " I am a teacher.";
    if (student["class"].number === this["class"]) {
      intro += " I teach " + student.name + ".";
    }
    if (student["class"].number !== this["class"]) {
      intro += " I don't teach " + student.name + ".";
    }
    return intro;
  };

  return Teacher;

})(Person);

Class = (function() {
  function Class(number) {
    this.number = number;
  }

  return Class;

})();

//# sourceMappingURL=main.js.map
