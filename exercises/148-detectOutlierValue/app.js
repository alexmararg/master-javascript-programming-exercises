function detectOutlierValue(str) {
    // your code here
    let oddNum = 0;
  let evenNum = 0;
  let result = str.split(' ');
  for (let x of result) {
    if (Number.parseInt(x) % 2 == 0) evenNum += 1;
    if (Number.parseInt(x) % 2 != 0) oddNum += 1;
  }
  if (evenNum > oddNum) {
    for (let x = 0; x < result.length; x++) {
      if (Number.parseInt(result[x]) % 2 != 0) return x + 1;
    }
  } else {
    for (let x = 0; x < result.length; x++) {
      if (Number.parseInt(result[x]) % 2 == 0) return x + 1;
    }
  }
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  // --> 2
