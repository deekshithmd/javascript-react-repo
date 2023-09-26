import React from "react";
import {
  fibonacci,
  factorial,
  isPrime,
  powerOfTwo,
  linearSearch,
  binarySearch,
  bubbleSort,
  insertionSort,
  quickSort1,
  quickSort2,
  mergeSort1,
  getCartesian
} from "./helpers";

export const ProblemSolving = () => {
  console.log("Fibonacci: ", fibonacci(2));
  console.log("Factorial: ", factorial(3));
  console.log("isPrime: ", isPrime(5));
  console.log("Power of Two: ", powerOfTwo(5));
  console.log("Linear search: ", linearSearch([1, 2, 3, 4, 5], 2));
  console.log("Binary search: ", binarySearch([1, 2, 3, 4, 5], 0, 5, 4));
  console.log("Bubble sort: ", bubbleSort([7, 9, 3, 6, 4]));
  console.log("Insertion sort: ", insertionSort([7, 9, -5, 6, 4]));
  console.log("Quicksort using extra space: ", quickSort1([8, 2, 7, 3, 6, 4, 5]));
  console.log("Quicksort inplace: ", quickSort2([8, 2, 7, 3, 6, 4, 5],0,6));
  console.log("Mergesort using extra space: ", mergeSort1([8, 2, 7, -3, 6, 4, 5]));
  console.log("Cartesian product of array",getCartesian([2,3],[1,4]))
  return <h1>Problem Solving</h1>;
};
