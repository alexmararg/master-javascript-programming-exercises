// Write your function here
function getOddLengthWordsAtProperty(ob,ke) {
    if (!ob[ke] || !Array.isArray(ob[ke])) return [];
    let a =ob[ke].filter(function equ(el) {
        return el.length%2!==0;
       });
    return a;
 }