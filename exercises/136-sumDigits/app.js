function sumDigits(num) {
    // your code here
    let st= num.toString();
    let su=0;
    for (let i = 0; i < st.length; i++) {
        if (st[i]==="-") {
            su-=Number(st[i+1]);
            i++;
        } else {
            su+=Number(st[i]); 
        }
    }
    return su;
}

let output = sumDigits(-316);
console.log(output); // --> 4
