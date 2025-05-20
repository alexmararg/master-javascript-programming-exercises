function listAllValues(obj) {
  // your code here
  let ar=[];
  let n=0;
  for (var o in obj) {
    ar[n]=obj[o];
    n++;
  }
  return ar;
}

let output = listAllValues({ name: 'Sam', age: 25, hasPets: true });
console.log(output); // --> [ 'Sam', 25, true ]
