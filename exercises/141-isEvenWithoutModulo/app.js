function isEvenWithoutModulo(num) {
    // your code here
    return (num-(~~(num/2)*2))===0;
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
