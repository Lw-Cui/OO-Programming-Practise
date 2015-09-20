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
		"I am a Student. I am at Class #{@class}."


class Worker extends Person
	constructor: (age, name) ->
		super age, name

	introduce: ->
		"I am a Worker. I have a job.";
