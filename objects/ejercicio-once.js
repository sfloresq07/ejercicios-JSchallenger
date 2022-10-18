// Write a function that takes an object (a) as argument
// Return the sum of all object values
function myFunction(a) {
    
  return Object.values(a).reduce((next, values) => {
    return next + values;
  }, 0); 
}

console.log(myFunction({w:15,x:22,y:13}));
