function computeFactorialOfN(n) {
    // your code here
    let s=1;
    for (let i = 1; i <= n; i++) {
      s*=i;
    }
    return s;
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
