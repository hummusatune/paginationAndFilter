// Get some variables going

const firstPage = 1;
const studentsPerPage = 10;

// Gather all of the students and toss them into an array
let students = document.querySelectorAll('.student-item');

// Create a variable that holds the total number of students, divides by studentsPerPage, and rounds up

let numberOfPages = Math.ceil(students.length / studentsPerPage);

$('ul li:nth-child(n+1):nth-child(-n+10').addClass('hide-this');

$('ul li:nth-child(n+11):nth-child(-n+20').addClass('show-this');

$('ul li:nth-child(n+21):nth-child(-n+30').addClass('show-this');

$('ul li:nth-child(n+31):nth-child(-n+40').addClass('show-this');

$('ul li:nth-child(n+41):nth-child(-n+50').addClass('show-this');

$('ul li:nth-child(n+51):nth-child(-n+60').addClass('show-this');

// $('ul li:nth-child(n+11):nth-child(-n+20').addClass(function(index) {
// 	return 'student-' + index;
// });