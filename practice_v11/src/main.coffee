class Person 
	constructor: (age, name) ->
		@age = age
		@name = name

	introduce: ->
		"My name is #{@name}. I am #{@age} years old."


class Student extends Person
	constructor: (age, name, my_class) ->
		super age, name
		@class = my_class
		@class.appendMember this

	introduce: ->
		intro = super + " I am a Student."
		intro += " I am Leader of Class #{@class.number}." if @class.leader is this
		intro += " I am at Class #{@class.number}." if @class.leader isnt this
		return intro


class Worker extends Person
	constructor: (age, name) ->
		super age, name

	introduce: ->
		super + " I am a Worker. I have a job."


class Teacher extends Person
	constructor: (age, name, my_class=[]) ->
		super age, name
		@class = my_class
		teach_class.teachers.push this for teach_class in @class

	introduce: ->
		intro = super + " I am a teacher."
		if @class? and @class.length isnt 0
			intro += " I teach Class"
			intro += " #{teach_class.number}," for teach_class in @class
			intro = intro.substr 0, intro.length - 1
			intro += '.'
		else
			intro += " I teach No Class."
		return intro

	introduceWith: (student) ->
		intro = @__proto__.__proto__.introduce.apply(this) + " I am a teacher."
		intro += " I teach #{student.name}." if student.class in @class
		intro += " I don't teach #{student.name}." if student.class not in @class
		return intro

	informJoin: (my_class, student) ->
		"I am #{@name}. I know #{student.name} has joined Class #{my_class.number}."

	informLeader: (my_class, student) ->
		"I am #{@name}. I know #{student.name} become Leader of Class #{my_class.number}."



class Class
	constructor: (number) ->
		@number = number
		@teachers = []
		@students = []
		@leader = undefined

	assginLeader: (student) ->
		if student in @students
			@leader = student
			teacher.informLeader this, student for teacher in @teachers
		else
			console.log "It is not one of us."

	appendMember: (student) ->
		@students.push student
		teacher.informJoin this, student for teacher in @teachers

	isIn: (student) ->
		true if student.class is this
		false unless student.class is this