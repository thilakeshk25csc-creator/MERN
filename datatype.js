
//PRIMITIVE


//Number
console.log("number");
var age=30;
console.log(age);

//string
console.log("string");
var name="hii";
console.log(name);

//boolean
console.log("boolean");
var isstudent=true;
console.log(isstudent);

//null
console.log("NULL");
var empty=null;
console.log(empty);

//symbol
console.log("symbol");
var symbolvalue=Symbol('symbol'); // Capitalized 'S'
console.log(symbolvalue);

//Big Int
console.log("Big Int");
var bigInt = 6379964841n; 
console.log(bigInt);


//NON PRIMITIVE


//Objects
// Object declaration (using Object Literal syntax)
console.log("object");

var student = {
    firstName: "Hii",
    age: 30,
    isStudent: true
};

console.log(student); 
console.log(student.firstName); // Outputs: "Hii"
console.log(student["age"]);     // Outputs: 30

//Arrays
console.log("Array");

var fruits = ["Apple", "Banana", "Orange"];
console.log(fruits); 
console.log(fruits[0]); // Outputs: "Apple"
console.log(fruits[1]); // Outputs: "Banana"

