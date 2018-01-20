// Get some variables going

const firstPage = 1;
const studentsPerPage = 10;

// Gather all of the students and toss them into an array
let students = document.querySelectorAll('.student-item');

// Find the total number of students, divide that by studentsPerPage, and round up

let numberOfPages = Math.ceil(students.length / studentsPerPage);


$( "div" ).hide();