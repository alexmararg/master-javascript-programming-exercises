function computeSumOfAllElements(arr) {
  // your code here
  let s=0;
  for (let i = 0; i < arr.length; i++) {
    s+=arr[i];
  }
  return s;
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
