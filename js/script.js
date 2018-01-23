// Get some variables going

const firstPage = 1;
const studentsPerPage = 10;

// Gather all of the students and toss them into an array
let students = document.querySelectorAll('.student-item');

// Create a variable that holds the total number of students, divides by studentsPerPage, and rounds up

let numberOfPages = Math.ceil(students.length / studentsPerPage);

$('ul li:nth-child(n+1):nth-child(-n+10').addClass('show-this');

$('ul li:nth-child(n+11):nth-child(-n+20').addClass('hide-this');

$('ul li:nth-child(n+21):nth-child(-n+30').addClass('show-this');

$('ul li:nth-child(n+31):nth-child(-n+40').addClass('hide-this');

$('ul li:nth-child(n+41):nth-child(-n+50').addClass('show-this');

$('ul li:nth-child(n+51):nth-child(-n+60').addClass('hide-this');

function showPage(/* arguments here for page number and student list */) {
    // first hide all students on the page
    // Then loop through all students in our student list argument
       // if student should be on this page number
       	// show the student
 }

function appendPageLinks(/* take a student list as an argument */) {
    // determine how many pages for this student list 
    // create a page link section
    // “for” every page
        // add a page link to the page link section
    // remove the old page link section from the site
    // append our new page link section to the site
    // define what happens when you click a link
        // Use the showPage function to display the page for the link clicked
        // mark that link as “active”
}

let firstTen = document.querySelectorAll('ul li:nth-child(n+1):nth-child(-n+10');
