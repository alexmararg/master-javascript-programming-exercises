function findSmallestElement(arr) {
    // your code here
    if (arr.length===0 || !Array.isArray(arr)) return 0;
    let l=99999;
    let p=0;
    for (let i = 0; i < arr.length; i++) {
         if (arr[i]<l) {
            l= arr[i];
            p=i;
         }    
    }
    return arr[p];
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1