  //console.log("Hello Prithibi");

  // Variables
  let name = "Prithibi";

  //Cannot be reserved keywords
  //should be meaningful
  //Cannot start with a number
  //Cannot contain a space or hyphen
  //they are case-sensitive


  // Constants

  //Value of constants cannot change

  const pi = 3.14;
  // This will throw an error
  //pi = 3.14159;
  console.log(pi);

  // Primitives
   let age = 25; // Number
   let isStudent = true; // Boolean
   let lastName = "Muqtu"; // String
   let height = null; // Null
   let weight; // Undefined

   // Dynamic Typing
    let dynamicVar = "Hello"; // Initially a string
    console.log(dynamicVar)
    console.log(typeof dynamicVar); // "string"
    dynamicVar = 42; // Now a number
    console.log(dynamicVar);
    console.log(typeof dynamicVar); // "number"

  // Reference Types
  // Objects
  let person = {
    name: "Muqtu",
    age: 25,
    isStudent: true
  };
  
  // Accessing object properties
  // Dot notation
  console.log(person.name); // "Muqtu"
  // Bracket notation
  console.log(person["age"]); // 25


  // Arrays
  let selectedColors = ["red", "green", "blue"];

  // Accessing array elements
  selectedColors[2] = 3; // Changing the third element


  console.log(selectedColors[0]); // "red"
  console.log(selectedColors[1]); // "green"

  console.log(selectedColors)
  console.log(typeof selectedColors); 

  console.log(selectedColors.length); // 3

  // Functions
  function greet(name) {
    console.log("Hello " + name);
  }

  // Calling the function
  greet("Muqtu");