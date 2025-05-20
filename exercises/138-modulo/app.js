function modulo(num1, num2) {
    // your code here
    if (num1===NaN||num2===NaN||num2===0) {
        return NaN;
    } else if (num1===0) {
        return 0;
    } else {
        return num1-(~~(num1/num2)*num2);
    }
}

let output = modulo(25, 4);
console.log(output); // --> 1
