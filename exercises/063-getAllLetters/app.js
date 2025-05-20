function getAllLetters(str) {
    // your code here
    let a=[];
    for (let i = 0; i < str.length; i++) {
        a.push(str[i]);
    }
    return a;
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
