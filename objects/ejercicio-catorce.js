// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object
function myFunction(a, b) {
    let multiply = {}
  for (let value of Object.keys(a)) {
    multiply[value] = a[value] * b
  }
  return multiply
}
console.log(myFunction({w:15,x:22,y:13},6))