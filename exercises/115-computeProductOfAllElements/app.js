function computeProductOfAllElements(arr) {
  // your code here
  if (arr.length===0 || !Array.isArray(arr)) return 0;
  let p=1;
  for (let i = 0; i < arr.length; i++) {
        p*=arr[i];
  }
  return p;
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
