function removeFromFrontOfNew(arr) {
    // your code here
    let a=[];
    for (let i = 1; i < arr.length; i++) {
        a.push(arr[i]);
    }
    return a;
}

let arr = [1, 2, 3];
let output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]
