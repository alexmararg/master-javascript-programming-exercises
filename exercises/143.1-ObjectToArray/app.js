function getAllKeys(obj) {
  // your code here
  let ar=[];
  let n=0;
  for (var o in obj) {
    ar[n]=o;
    n++;
  }
  return ar;
}

let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); // --> [ 'name', 'age', 'hasPets' ]
