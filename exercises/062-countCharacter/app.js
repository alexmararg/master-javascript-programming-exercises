function countCharacter(str, char) {
    // your code here
    let a=0;
    for (let i = 0; i < str.length; i++) {
        if (str[i]===char) {
            a++;
        }
    }
    return a;
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
