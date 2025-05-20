function getSquaredElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key])) return [];
    return obj[key].map(function (x) {
      return Math.pow(x, 2);
    }); 
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
