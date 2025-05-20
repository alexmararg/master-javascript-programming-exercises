function removeFromBackOfNew(arr) {
  // your code here
  let a=[];
    for (let i = 0; i < arr.length-1; i++) {
        a.push(arr[i]);
    }
    return a;
}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]
