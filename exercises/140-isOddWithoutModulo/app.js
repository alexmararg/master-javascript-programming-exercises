function isOddWithoutModulo(num) {
    // your code here
    return (num-(~~(num/2)*2))!==0;
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
