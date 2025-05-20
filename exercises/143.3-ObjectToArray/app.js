function convertObjectToList(obj) {
  // your code here
  let ar=[];
  let n=0;
  for (var o in obj) {
    ar[n]=[o,obj[o]];
    n++;
  }
  return ar;
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]
