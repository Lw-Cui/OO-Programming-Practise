// Generated by CoffeeScript 1.10.0
var Class, Person, Student, Teacher, Worker,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty,
  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

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
    this["class"].appendMember(this);
  }

  Student.prototype.introduce = function() {
    var intro;
    intro = Student.__super__.introduce.apply(this, arguments) + " I am a Student.";
    if (this["class"].leader === this) {
      intro += " I am Leader of Class " + this["class"].number + ".";
    }
    if (this["class"].leader !== this) {
      intro += " I am at Class " + this["class"].number + ".";
    }
    return intro;
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
    var i, len, ref, teach_class;
    if (my_class == null) {
      my_class = [];
    }
    Teacher.__super__.constructor.call(this, age, name);
    this["class"] = my_class;
    ref = this["class"];
    for (i = 0, len = ref.length; i < len; i++) {
      teach_class = ref[i];
      teach_class.teachers.push(this);
    }
  }

  Teacher.prototype.introduce = function() {
    var i, intro, len, ref, teach_class;
    intro = Teacher.__super__.introduce.apply(this, arguments) + " I am a teacher.";
    if ((this["class"] != null) && this["class"].length !== 0) {
      intro += " I teach Class";
      ref = this["class"];
      for (i = 0, len = ref.length; i < len; i++) {
        teach_class = ref[i];
        intro += " " + teach_class.number + ",";
      }
      intro = intro.substr(0, intro.length - 1);
      intro += '.';
    } else {
      intro += " I teach No Class.";
    }
    return intro;
  };

  Teacher.prototype.introduceWith = function(student) {
    var intro, ref, ref1;
    intro = this.__proto__.__proto__.introduce.apply(this) + " I am a teacher.";
    if (ref = student["class"], indexOf.call(this["class"], ref) >= 0) {
      intro += " I teach " + student.name + ".";
    }
    if (ref1 = student["class"], indexOf.call(this["class"], ref1) < 0) {
      intro += " I don't teach " + student.name + ".";
    }
    return intro;
  };

  Teacher.prototype.informJoin = function(my_class, student) {
    return "I am " + this.name + ". I know " + student.name + " has joined Class " + my_class.number + ".";
  };

  Teacher.prototype.informLeader = function(my_class, student) {
    return "I am " + this.name + ". I know " + student.name + " become Leader of Class " + my_class.number + ".";
  };

  return Teacher;

})(Person);

Class = (function() {
  function Class(number) {
    this.number = number;
    this.teachers = [];
    this.students = [];
    this.leader = void 0;
  }

  Class.prototype.assginLeader = function(student) {
    var i, len, ref, results, teacher;
    if (indexOf.call(this.students, student) >= 0) {
      this.leader = student;
      ref = this.teachers;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        teacher = ref[i];
        results.push(teacher.informLeader(this, student));
      }
      return results;
    } else {
      return console.log("It is not one of us.");
    }
  };

  Class.prototype.appendMember = function(student) {
    var i, len, ref, results, teacher;
    this.students.push(student);
    ref = this.teachers;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      teacher = ref[i];
      results.push(teacher.informJoin(this, student));
    }
    return results;
  };

  Class.prototype.isIn = function(student) {
    if (student["class"] === this) {
      true;
    }
    if (student["class"] !== this) {
      return false;
    }
  };

  return Class;

})();

//# sourceMappingURL=main.js.map
