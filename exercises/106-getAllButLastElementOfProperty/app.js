function getAllButLastElementOfProperty(obj, key) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key])|| obj[key].length === 0) return [];
    let a=obj[key];
    a.splice(a.length-1,1);
    return a;
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
