Callback Functions

const person = {
	name: 'Mike Mitchell',
	role: 'Admin'
}

function logTeacher(teacher) {
	cosole.log('${teacher.name} - ${teacher.role}');
}

logTeacher(person);

function sayHello() {
	console.log('Hello');
}

function executeCallback(callback) {
	callback();
}

executeCallback(sayHello);

// We can also inline this!

executeCallback(function () {
	console.log('Hello');
});

executeCallback(function () {
	console.log('goodbye');
});

// Arrow syntax anonymous function

executeCallback(() => console.log('Hello'));


// Now playing with setTimeout(callback, delay)

const surpriseSection = document.getElementById('surprise');

function showSurprise() {
	surpriseSection.textContent = 'SURPRISE!';
}

const randomTime = Math.random() * 4000;

setTimeout(showSurprise, randomTime);

// Can I change showSurprise to be an anonymous function?

setTimeout(() => surpriseSection.textContent = 'SURPRISE!', randomTime);

// Now playing with setInterval(callback, delay)

setInterval(callback, 1000);

const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

nameInput.addEventListener('focus', event => {
	event.target.className = 'highlight';
});

nameInput.addEventListener('blur', event => {
	event.target.className = '';
});

// Now the DRY version

const focusHandler = event => {
	event.target.className = 'highlight';
};

const blurHandler = event => {
	event.target.className = '';
};

nameInput.addEventListener('focus', focusHandler);

nameInput.addEventListener('blur', blurHandler);

