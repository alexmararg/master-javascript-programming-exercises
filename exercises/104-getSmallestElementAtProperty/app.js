function getSmallestElementAtProperty(obj, key) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key])|| obj[key].length === 0) return [];
    let a=obj[key];
    let mi=99999;
    for (let i = 0; i < a.length; i++) {
      if (a[i]<mi) {
        mi=a[i];
      }
    } 
    return mi;
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
