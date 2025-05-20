// Write your function here
function getElementsLessThan100AtProperty(ob,ke) {
    if (!ob[ke] || !Array.isArray(ob[ke])) return [];
    let a =ob[ke].filter(function equ(el) {
        return el<100;
       });
    return a;
 }