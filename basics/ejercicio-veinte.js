// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function myFunction(a, b) {
  let charOff = /\W/g;
  let sorts = b.replace(charOff, "").split("").reverse().join("");
  let strMayus = a.charAt(0).toUpperCase() + a.slice(1);
  let resul = strMayus.replace(charOff, "") + sorts;

  return resul;
}
console.log(myFunction("java", "tpi%rcs"));
