///// Question 1
// Define a class called `Cat`, with an initializer that accepts a `name`,
// an `age`, and a `color`, and stores these values as properties.

var Cat = function(name, age, color){
    this.name= name;
    this.age = age;
    this.color = color;
};

// Define all the methods for Person in an object literal.
// A little faster than above, defining them individually.

var Cat = function(name, age, color){
    information: {
      this.name= name;
      this.age = age;
      this.color = color;
  }
};

///// Question 2
// Add a function called `description` to the `Cat` class that returns a string
// describing the cat in this format: "<name> is a <age>-year-old <color> cat."

Cat.prototype = {
   description: function(){
    return this.name + " is " + this.age + " years old " + this.color + " cat-penguin. He's a loveable freak of nature, this one.";
   }
 };


///// Question 3
// Create a new instance of the `Cat` class (make up an age, name, and color)
// and assign it to a variable.

var gunter = new Cat("Gunter", 75, "magenta");
console.log(gunter);


///// Question 4
// Call the `description` function on the `Cat` instance you created in the
// previous question, and store the result in another variable.

var gunter_info = gunter.description();

///// Question 5
// Set the age of the `Cat` instance you created in question 3 to one higher
// than its current age.

gunter.age = 100;
