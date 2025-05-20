function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let im=preTaxAndTipAmount*0.095;
    let pr=preTaxAndTipAmount*0.15;
    return preTaxAndTipAmount+im+pr;
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
