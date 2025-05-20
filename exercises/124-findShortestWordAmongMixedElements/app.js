function findShortestWordAmongMixedElements(arr) {
    // your code here
    if (arr.length===0 || !Array.isArray(arr)) return "";
    let l=99999;
    let p="";
    for (let i = 0; i < arr.length; i++) {
         if (arr[i].length<l&& typeof arr[i]==="string") {
            l= arr[i].length;
            p=arr[i];
         }    
    }
    return p;
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
