// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

function myFunction(arr) {
    let arrObj = [...new Set(arr.map((elem) => elem[0].toLowerCase()))]
    let obj = {}
    for(arg of arrObj){
        obj[arg] = arr.filter((elem) => elem[0].toLowerCase() === arg)
    }
  return obj;
}
console.log(myFunction(['Alf', 'Alice', 'Ben']));