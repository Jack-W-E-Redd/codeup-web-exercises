"use strict";

// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
// function showMultiplicationTable () {


// function showMultiplicationTable(num) {
//     for (var i = 0; i <=10; i++) {
//         var result = num * i;
//         console.log(num + " x " + i + " = " + result);
//     }
// }

// 2) Works

function showMultiplication (num) {

  for (var i = 0; i <= 10; i++) {
      var result = num * i;
      console.log(num + " x " + i + " = " + result);
  }
}

// 3) Works
// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

function randomDigit(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (var i = 0; i < 10; i++) {
    var x = randomDigit(20, 200);
    if (x % 2 === 0) {
        console.log(x + " is even ");
    } else {
        console.log(x + " is odd ");
    }
}

// 4) Still in progress

function generatePyramid() {
    var totalNumberofRows = 5;
    var output = '';
    for (var i = 1; i <= totalNumberofRows; i++) {
        for (var j = 1; j <= i; j++) {
            output += j + '  ';
        }
        console.log(output);
        output = '';
    }
}

generatePyramid();

// 4) Works

for (var i = 1; i <= 9; i += 1) {
    console.log(String(i).repeat(i));
}


// 5) Works

for(var i = 100; i >= 5; i = i - 5) {
    console.log(i);
}



























