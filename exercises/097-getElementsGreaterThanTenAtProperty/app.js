// Write your function here
function getElementsGreaterThan10AtProperty(ob,ke) {
    if (!ob[ke] || !Array.isArray(ob[ke])) return [];
    let a =ob[ke].filter(function equ(el) {
        return el>10;
       });
    return a;
 }