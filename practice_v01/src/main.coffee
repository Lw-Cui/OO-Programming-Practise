class Person 
	constructor: (age, name) ->
		@age = age
		@name = name

	introduce: ->
		return "My name is #{@name}. I am #{@age} years old."