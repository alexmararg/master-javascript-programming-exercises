function squareElements(arr) {
  // your code here
  if (arr.length===0 || !Array.isArray(arr)) return [];
    let a=[];
    for (let i = 0; i < arr.length; i++) {
         a[i]=Math.pow(arr[i],2);
    }
    return a;
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
