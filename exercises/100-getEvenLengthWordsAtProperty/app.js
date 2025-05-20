function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key])) return [];
    let a =obj[key].filter(function equ(el) {
        return el.length%2===0;
       });
    return a;
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
