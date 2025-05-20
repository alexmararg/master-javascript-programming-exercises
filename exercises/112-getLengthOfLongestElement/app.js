function getLengthOfLongestElement(arr) {
    // Your code here
    if (arr.length===0 || !Array.isArray(arr)) return 0;
    let l=0;
    for (let i = 0; i < arr.length; i++) {
         if (arr[i].length>l) {
            l= arr[i].length;
         }    
    }
    return l;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
