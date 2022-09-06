// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array
function myFunction(a, n) {
    let arr = [...a];
    let resul = [];
    for (let i = 0; i < a.length; i++) {
       if (arr.length < n) break;
       resul.push(arr[n - 1]);
       arr = arr.slice(n);
    }
    return resul;
 }
console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
