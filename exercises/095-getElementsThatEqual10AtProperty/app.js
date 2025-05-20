// Write your function here
function getElementsThatEqual10AtProperty(ob,ke) {
    if (!ob[ke] || !Array.isArray(ob[ke])) return [];
    let a =ob[ke].filter(function equ(el) {
        return el===10;
       });
    return a;
 }