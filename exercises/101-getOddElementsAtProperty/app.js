function getOddElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key])|| obj[key].length === 0) return [];
    let a =obj[key];
    let r=[];
    /*a .push(obj[key].filter(function equ(el) {
        return el%2!==0;
       }));*/
      for (let i = 0; i < a.length; i++) {
        if (a[i]%2!==0) {
          r.push(a[i]);
        }
      }
    return r;
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
