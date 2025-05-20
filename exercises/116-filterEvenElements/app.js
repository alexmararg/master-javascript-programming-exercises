function filterEvenElements(arr) {
    // your code here
    if (!arr || !Array.isArray(arr)) return [];
    let a =arr.filter(function equ(el) {
        return el%2===0;
       });
    return a;
}

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
