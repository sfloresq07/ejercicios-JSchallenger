// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

function myFunction(a, b) {
    let str = a.split('')

    for (let i = str.length - 3; i > 0; i -= 3) {
  
      str.splice(i, 0, b)
  
    }
    return str.join('')
  
}
console.log(myFunction('zxyzxyzxyzxyzxyz','w'));