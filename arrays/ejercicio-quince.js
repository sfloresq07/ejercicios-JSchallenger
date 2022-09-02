// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays
function myFunction(...arrays) {
  return arrays.flat()
}
console.log(myFunction(['a', 'b', 'c'], [4, 5, 6]));