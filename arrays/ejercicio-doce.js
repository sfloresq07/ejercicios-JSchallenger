// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
function myFunction(arr) {
  let sum = arr.reduce((a, b) => a + b, 0);
  return sum / arr.length
}
console.log(myFunction([-50,0,50,200]));