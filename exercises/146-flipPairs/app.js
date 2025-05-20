function flipPairs(input) {
    // your code here
    let re="";
    if (input.length%2===0) {
        for (let i = 0; i < input.length; i+=2) {
            re+=input[i+1]+input[i];
        }
    } else {
        for (let i = 0; i < input.length-1; i+=2) {
            re+=input[i+1]+input[i];
        }
        re+=input[input.length-1];
    }
    return re;
}

let input = "Can you see what this is about?";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?
