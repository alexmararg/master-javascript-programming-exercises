function getLargestNumberAmongMixedElements(arr) {
    // your code here
    if (arr.length===0 || !Array.isArray(arr)) return 0;
    let l=-99999;
    let p=0;
    for (let i = 0; i < arr.length; i++) {
         if (arr[i]>l&& typeof arr[i]==="number") {
            l= arr[i];
            p=arr[i];
         }    
    }
    return p;
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
