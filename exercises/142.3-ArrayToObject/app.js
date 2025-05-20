function transformEmployeeData(array) {
  // your code here
  
  if (!Array.isArray(array[0][0])) {
    let ob={};
    for (let i = 0; i < array.length; i++) {
      ob[array[i][0]]=array[i][1];
    }
    return ob;
  } else {
    let ar=[];
    for (let i = 0; i < array.length; i++) {
      let obj={};
      for (let ind = 0; ind < array[i].length; ind++) {
        obj[array[i][ind][0]]=array[i][ind][1];
      }
      ar[i]=obj;
    }
    return ar;
  }
}