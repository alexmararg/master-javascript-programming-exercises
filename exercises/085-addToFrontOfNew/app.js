function addToFrontOfNew(arr, element) {
    // your code here
    let a=[];
    return a.concat(element,arr);
}

let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]
