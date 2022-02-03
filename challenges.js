// CHALLENGE --------------------------------
// **Function to convert a number to a string

// METHOD 1
function numberToString(num) {
	// Return a string of the number here!
	return num.toString();
}

// numberToString(123);

// METHOD 2
function numberToString2(num) {
	return console.log(String(num));
}

// numberToString2(123);

// END OF Challenge  --------------------------------

// CHALLENGE -------------------------------------
// **You get an array of numbers, return the sum of all of the positives ones.
// **Example [1,-4,7,12] => 1 + 7 + 12 = 20
// ** Note: if there is nothing to sum, the sum is default to 0.

let numbers = [1, -4, 7, 12];

function positiveSum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			// Suma
			sum += arr[i];
		}
	}
	return sum;
}

// positiveSum(numbers);

// END OF CHALLENGE -------------------------------------

// CHALLENGE -------------------------------------
// Make a simple function called greet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?

function greet() {
	return console.log('Hello world 🖐🌐');
}

// greet();

// END OF CHALLENGE --------------------------------------

// CHALLENGE -----------------------------
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// ** La fórmula para sacar n veces un número es ((1+n)*n) / 2

var summation = function (num) {
	// Code here
	let suma = ((1 + num) * num) / 2;
	return suma;
};

// console.log(summation(8));
// END OF CHALLENGE ------------------------------

// CHALLENGE -----------------------------
// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// Method 1
function repeatStr(n, s) {
	let string = s.repeat(n);
	console.log(string);
	return string;
}

// repeatStr(6, 'Hello');

// Method 2
function repeatStr2(n, s) {
	var str = '';
	for (var i = 0; i < n; i++) {
		str += s; // str + s;
	}
	console.log(str);
	return str;
}
// repeatStr2(6, 'Hello');

// END OF CHALLENGE ----------------------------

// CHALLENGE -----------------------------
// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

// !Math.floor() permite redondear al número más pequeño.

function litres(time) {
	let litros = Math.floor(time * 0.5);
	console.log(litros);
	return litros;
}

// litres(6.7);

// END OF CHALLENGE ----------------------------

// CHALLENGE -----------------------------

// END OF CHALLENGE ----------------------------
