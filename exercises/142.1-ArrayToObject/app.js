function transformFirstAndLast(array) {
  // your code here
  let ob={};
  let ke=array[0];
  ob[ke]=array[array.length-1];
  return ob;
}

let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(arr)); // --> { Queen: "Beyonce" }
