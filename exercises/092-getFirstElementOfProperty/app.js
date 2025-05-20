// Write your function here
function getFirstElementOfProperty(ob,key) {
    if (!ob[key]) return undefined;
    let a =ob[key];
    return a[0];
 }