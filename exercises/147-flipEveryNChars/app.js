function flipEveryNChars(input, n) {
    // your code here
    let re="";
    for (let i = 0; i < input.length; i+=n) {
        re+=input.substring(i, i+n).split("").reverse().join("");
    }
    return re;
}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
