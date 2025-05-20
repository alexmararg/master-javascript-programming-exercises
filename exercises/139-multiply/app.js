function multiply(num1, num2) {
    // your code here
    let mul=0;
    if (num2>0) {
        for (let i = 0; i < num2; i++) {
            mul+=num1;
        }
    } else {
        for (let i = 0; i < (-num2); i++) {
            mul+=num1;
        }
        if (mul!==0) {
            mul=(-mul);
        }
    }
    return mul;
}

let output = multiply(4, 7);
console.log(output); // --> 28
