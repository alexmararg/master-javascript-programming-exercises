function isRotated(str1, str2) {
    // your code here
    let cad1=forstr(str1);
    let cad2=forstr(str2);
    for (const key in cad1) {
      if (cad1[key]!==cad2[key]) {
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
  
  console.log(isRotated('hello world', 'orldhello w')); // --> true
  console.log(isRotated('hello world', 'omrel wp')); // --> false
  
