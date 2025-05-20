// Write your function here
function getNthElementOfProperty(ob,ke,nu) {
    if (!ob[ke]) return undefined;
    let a =ob[ke];
    return a[nu];
 }