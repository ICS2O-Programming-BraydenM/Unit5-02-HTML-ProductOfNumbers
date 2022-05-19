// Copyright (c) 2022 Brayden MacMillan All rights reserved
// Created by: Brayden MacMillan
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

 // This function displays the result of a product using a for loop and addition instead of multiplication 
function displayNumbers() {
	
	// get the two positive integers from the user 
	let firstNum = parseInt(document.getElementById('firstNum').value);

  let secondNum = parseInt(document.getElementById('secondNum').value);

	// initialize numbers as an empty string
	let numbers = 0;

  // use a for loop to calculate product of two positive integers solely using addition 
	for (let counter = 1; counter <= secondNum; counter++) {

    numbers = numbers + firstNum
  }

  	// return the string of numbers back to user
  	document.getElementById('display-results').innerHTML = "The product of these two positive integers is " + numbers
}