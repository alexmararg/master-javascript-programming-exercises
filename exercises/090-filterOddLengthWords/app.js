function filterOddLengthWords(words) {
    // your code here
    let a=[];
    a=words.filter(function equ(el) {
     return el.length%2!==0;
    });
    return a;
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', 'now']
