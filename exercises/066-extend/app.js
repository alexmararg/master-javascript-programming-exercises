let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    for (const key in obj2) {
        if (Object.prototype.hasOwnProperty.call(obj2, key)) {
            obj1.key = obj2[key];
        }
    }
}