function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key])|| obj[key].length === 0) return 0;
    let a=obj[key];
    let s=0;
    for (let i = 0; i < a.length; i++) {
      s+=a[i];
    }
    return s;
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
