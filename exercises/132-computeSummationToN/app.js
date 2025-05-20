function computeSummationToN(n) {
  // your code here
  let s=0;
  /*for (let i = 0; i < 0; i++) {
      s+=i;
  }*/
  s=(n+1)*(n/2);
    return s;
}

let output = computeSummationToN(6);
console.log(output); // --> 21

