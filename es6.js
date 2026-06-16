// Let 
let studentCount = 10;
studentCount = 11;
console.log("student Count:", studentCount);

// Const
const collegeName = "VETIAS";
console.log("College Name:", collegeName);

// Template Literals
let studentName = "Arun";
console.log(`Welcome ${studentName} to ${collegeName}`);

// Object
const student = {
    name: "Arun",
    age: 20,
    department: "IT"
};
console.log(student);

// Destructuring
const { name, age, department } = student;
console.log("Name:", name);
console.log("Age:", age);
console.log("Department:", department);

// Arrow Function
const displayStudent = () => {
    console.log(`student Name: ${name}`);
};
displayStudent();

// Spread operator
const students = ["Arun", "Kumar"];
const updatedStudents = [
    ...students,
    "Rahul"
];
console.log(updatedStudents);

// Rest operator
function maximumMarks(...marks) {
    let max = Math.max(...marks);
    return max;
}
console.log("maximum marks:", maximumMarks(80, 90, 70));
