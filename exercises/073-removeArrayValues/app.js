function removeArrayValues(obj) {
    // your code here
    for (const key in obj) {
        if(Array.isArray(obj[key])){
            delete obj[key];
        }
    }
}