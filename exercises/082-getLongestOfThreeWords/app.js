function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let mx =Math.max(word1.length,word2.length,word3.length);
    if (word1.length===mx) {
        return word1;
    } else if (word2.length===mx) {
        return word2;
    } else {
        return word3;
    }
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
