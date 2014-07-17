///// Question 1
// Define a class called `Cat`, with an initializer that accepts a `name`,
// an `age`, and a `color`, and stores these values as properties.

var Cat = function(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
};

///// Question 2
// Add a function called `description` to the `Cat` class that returns a string
// describing the cat in this format: "<name> is a <age>-year-old <color> cat."

Cat.prototype = {
  description: function() {
   return this.name + ' is a ' + this.age + '-year-old ' + this.color + ' cat.';
  }
};

///// Question 3
// Create a new instance of the `Cat` class (make up an age, name, and color)
// and assign it to a variable.

var garfield = new Cat('Garfield', 11, 'orange');

///// Question 4
// Call the `description` function on the `Cat` instance you created in the
// previous question, and store the result in another variable.

desc = garfield.description();

///// Question 5
// Set the age of the `Cat` instance you created in question 3 to one higher
// than its current age.

garfield.age++;
