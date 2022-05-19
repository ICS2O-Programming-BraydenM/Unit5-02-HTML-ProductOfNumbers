// Copyright (c) 2022 Brayden MacMillan All rights reserved
// Created by: Brayden MacMillan
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays all even numbers between a set min number and a set max number 
 */
function displayNumbers() {
	
	// get the two positive integers from the user 
	let firstNum = parseInt(document.getElementById('firstNum').value);

  let secondNum = parseInt(document.getElementById('secondNum').value);

  // initialize the counter to the min number 
	let counter = firstNum;
	// initialize numbers as an empty string
	let numbers = "";

  // use a for loop to calculate product of two positive integers solely using addition 
	for (let counter = 0; counter <= firstNum; counter++) {


    numbers = numbers + counter + "<br>"
  }

		// increment the counter
		counter = counter +1
	}

  	// return the string of numbers back to user
  	document.getElementById('display-results').innerHTML = numbers
}