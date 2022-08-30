// Write a function that takes an array of strings as argument
// Return the longest string
function myFunction(arr) {
  let longStr= Math.max(...arr.map((arg) => arg.length));
  return arr.filter(elem => elem.length === longStr).toString()
}
console.log(myFunction(["help", "me"]));
