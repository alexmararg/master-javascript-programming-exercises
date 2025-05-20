function getLongestElement(arr) {
    // your code here
    if (arr.length===0 || !Array.isArray(arr)) return "";
    let l=0;
    let p=0;
    for (let i = 0; i < arr.length; i++) {
         if (arr[i].length>l) {
            l= arr[i].length;
            p=i;
         }    
    }
    return arr[p];
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
