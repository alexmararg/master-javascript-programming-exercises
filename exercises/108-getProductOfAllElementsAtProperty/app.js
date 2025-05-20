function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key])|| obj[key].length === 0) return 0;
    let a=obj[key];
    let m=1;
    for (let i = 0; i < a.length; i++) {
      m*=a[i];
    } 
    return m;
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
