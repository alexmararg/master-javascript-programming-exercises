function getEvenElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key])|| obj[key].length === 0) return [];
    let a =obj[key];
    let r=[];
      for (let i = 0; i < a.length; i++) {
        if (a[i]%2===0) {
          r.push(a[i]);
        }
      }
    return r;
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
