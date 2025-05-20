function findShortestElement(arr) {
    // your code here
    if (arr.length===0 || !Array.isArray(arr)) return "";
    let l=99999;
    let p=0;
    for (let i = 0; i < arr.length; i++) {
         if (arr[i].length<l) {
            l= arr[i].length;
            p=i;
         }    
    }
    return arr[p];
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'