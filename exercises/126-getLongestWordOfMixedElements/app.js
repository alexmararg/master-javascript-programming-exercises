function getLongestWordOfMixedElements(arr) {
    // your code here
    if (arr.length===0 || !Array.isArray(arr)) return "";
    let l=-99999;
    let p="";
    for (let i = 0; i < arr.length; i++) {
         if (arr[i].length>l&& typeof arr[i]==="string") {
            l= arr[i].length;
            p=arr[i];
         }    
    }
    return p;
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
