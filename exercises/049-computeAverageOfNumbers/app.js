// Write your function here
function computeAverageOfNumbers(arr) {
    let sum=0;
    if (sum===arr.length) {
        return sum;
    }else{
        for (let i = 0; i < arr.length; i++) {
            sum+=arr[i];
        }
        return sum/arr.length;
    }
}
