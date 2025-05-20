function filterEvenLengthWords(words) {
    // your code here
    let a=[];
    a=words.filter(function equ(el) {
     return el.length%2===0;
    });
    return a;
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
