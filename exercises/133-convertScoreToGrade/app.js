function convertScoreToGrade(score) {
    // your code here
    if (101>score&&score>=90) {
        return"A";
    } else if (90>score&&score>=80) {
        return"B";
    } else if (80>score&&score>=70) {
        return"C";
    } else if (70>score&&score>=60) {
        return"D"
    } else if (60>score&&score>=0) {
        return"F";
    } else {
        return"INVALID SCORE";
    }
}

let output = convertScoreToGrade(91);
console.log(output); // --> 'A'
