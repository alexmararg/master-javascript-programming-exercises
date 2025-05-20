// Write your function here
function getLastElementOfProperty(ob,ke) {
    if (!ob[ke]) return undefined;
    let a =ob[ke];
    return a[a.length-1];
 }