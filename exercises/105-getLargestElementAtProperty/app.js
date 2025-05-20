function getLargestElementAtProperty(obj, key) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key])|| obj[key].length === 0) return [];
    let a=obj[key];
    let mi=-99999;
    for (let i = 0; i < a.length; i++) {
      if (a[i]>mi) {
        mi=a[i];
      }
    } 
    return mi;
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
