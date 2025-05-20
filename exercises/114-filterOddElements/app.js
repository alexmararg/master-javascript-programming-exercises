function filterOddElements(arr) {
  // your code here
  if (!arr || !Array.isArray(arr)) return [];
    let a =arr.filter(function equ(el) {
        return el%2!==0;
       });
    return a;
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
