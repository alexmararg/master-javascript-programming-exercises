function findLongestPalindrome(sentence) {
  // your code here
  //let sentence2 = sentence.toLowerCase(); // ignorar mayúsculas/minúsculas
  let longest = '';

  for (let start = 0; start < sentence.length; start++) {
    for (let end = start + 1; end <= sentence.length; end++) {
      let substr = sentence.slice(start, end).toLowerCase();
      if (isPalindrome(substr)) {
        if (substr.length >= longest.length) {
          longest = sentence.slice(start, end); // si hay empate, se guarda el último
        }
      }
    }
  }
  return longest;
}

function reverseString(string) {
  // your code here
  return string.split('').reverse().join('');
}

function isPalindrome(word) {
  // your code here
  return word === reverseString(word);
}

let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output); // --> "a racecar a"
