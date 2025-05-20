function isIsogram(text) {
  // your code here
  let cad=forstr(text.toLowerCase());
    for (const key in cad) {
      if (1<cad[key]) {
        return false;
      } 
    }
    return true;
  }
function forstr(str) {
  let obj={};
  for (const cha of str) {
    if (obj[cha]===undefined || obj[cha]===NaN) {
      obj[cha]=1;
    } else {
      obj[cha]++;
    }
  }
  return obj;
}

console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false
