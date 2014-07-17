///// Question 1
// Define a class called `Cat`, with an initializer that accepts a `name`,
// an `age`, and a `color`, and stores these values as properties.

var Cat = function(name, age, color){
  this.name = name;
  this.age = age;
  this.color = color;
};

// OR

function Cat(name, age, color){
  this.name = name;
  this.age = age;
  this.color = color;
};


///// Question 2
// Add a function called `description` to the `Cat` class that returns a string
// describing the cat in this format: "<name> is a <age>-year-old <color> cat."

// Below, you are overwriting entire protype of function with new object
// Typically preferred because you usually define all your functions in one shot
Cat.prototype = {
  description: function(){
    return this.name + " is a" + this.age + "-year-old " + this.color + " cat.";
  }
};

// OR

// Below, you are just adding a new property onto an existing prototype
Cat.prototype.description = function(){
   return this.name + " is a" + this.age + "-year-old " + this.color + " cat.";
  };

///// Question 3
// Create a new instance of the `Cat` class (make up an age, name, and color)
// and assign it to a variable.

var newCat = new Cat('Garfield', 2, 'orange');

///// Question 4
// Call the `description` function on the `Cat` instance you created in the
// previous question, and store the result in another variable.

var newCat2 = newCat.description();

///// Question 5
// Set the age of the `Cat` instance you created in question 3 to one higher
// than its current age.

// MY ANSWER
newCat.age += age++;

// CORRECT

newCat.age += 1;
