// Write a function that takes an array of numbers as argument
// It should return the sum of the numbers
function myFunction(a) {
  return a.reduce((a, b) => a + b, 0);
}

console.log(myFunction([-50,0,50,200]));
