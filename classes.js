///// Question 1
// Define a class called `Cat`, with an initializer that accepts a `name`,
// an `age`, and a `color`, and stores these values as properties.

var cat = function(name, age, colour) {
  this.name = name;
  this.age = age;
  this.colour = colour;
};

///// Question 2
// Add a function called `description` to the `Cat` class that returns a string
// describing the cat in this format: "<name> is a <age>-year-old <color> cat."

cat.prototype = {
  description: function() {
    return this.name + " is a " + this.age + " year-old " + this.colour + " cat.";
  }
};

///// Question 3
// Create a new instance of the `Cat` class (make up an age, name, and color)
// and assign it to a variable.

var sassy = new cat('Sassy', 7, 'white');

///// Question 4
// Call the `description` function on the `Cat` instance you created in the
// previous question, and store the result in another variable.

var sassyDescription = sassy.description();

///// Question 5
// Set the age of the `Cat` instance you created in question 3 to one higher
// than its current age.

sassy.age = sassy.age + 1;
