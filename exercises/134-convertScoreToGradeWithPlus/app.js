function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    if (101>score&&score>=90) {
        return"A"+plusAndMinus(score);
    } else if (90>score&&score>=80) {
        return"B"+plusAndMinus(score);
    } else if (80>score&&score>=70) {
        return"C"+plusAndMinus(score);
    } else if (70>score&&score>=60) {
        return"D"+plusAndMinus(score);
    } else if (60>score&&score>=0) {
        return"F";
    } else {
        return"INVALID SCORE";
    }
}
function plusAndMinus(pu){
    let un = pu % 10; 
    if (un > 7 || pu===100) {
      return "+";
    } else if (un<3) {
      return "-";
    } else {
      return "";
    }
}


let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
