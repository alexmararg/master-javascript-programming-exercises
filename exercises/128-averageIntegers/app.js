function average(arr) {
  // your code here
  return sum(arr)/arr.length;
}

function sum(arr) {
  // your code here
  let s=0;
  for (let i = 0; i < arr.length; i++) {
    s+=arr[i];
  }
  return s;
}

console.log(average([1, 2])); // --> 1.5
