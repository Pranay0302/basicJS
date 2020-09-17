// while loop

var students = ["max", "brian", "abel"];

while (students.length > 0) {
    let student = students.pop(); // from the end cause of pop function
    console.log(`Hey, ${student}.`);
}

console.log("-------------------------------");

var teachers = ["joseph", "matt", "angelina"];

while (teachers.length > 0) {
    let teacher = teachers.shift(); // from the beginning cause of shift function
    console.log(`Hello, ${teacher}.`);
}