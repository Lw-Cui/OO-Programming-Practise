
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

	introduce: ->
		super + " I am a Student. I am at Class #{@class}."


class Worker extends Person
	constructor: (age, name) ->
		super age, name

	introduce: ->
		super + " I am a Worker. I have a job."


class Teacher extends Person
	constructor: (age, name, my_class) ->
		super age, name
		@class = my_class

	introduce: ->
		intro = super + " I am a teacher."
		intro += " I teach Class #{@class}." if @class?
		intro += " I teach No Class." unless @class?
		return intro