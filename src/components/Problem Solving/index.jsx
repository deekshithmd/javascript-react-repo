import React from "react";
import {
  fibonacci,
  factorial,
  isPrime,
  powerOfTwo,
  linearSearch,
  binarySearch,
  bubbleSort
} from "./helpers";

export const ProblemSolving = () => {
  console.log("Fibonacci: ", fibonacci(2));
  console.log("Factorial: ", factorial(3));
  console.log("isPrime: ", isPrime(5));
  console.log("Power of Two: ", powerOfTwo(5));
  console.log("Linear search: ", linearSearch([1, 2, 3, 4, 5], 2));
  console.log("Binary search: ", binarySearch([1, 2, 3, 4, 5], 0, 5, 4));
  console.log("Bubble sort: ",bubbleSort([7,9,3,6,4]))
  return <h1>Problem Solving</h1>;
};
