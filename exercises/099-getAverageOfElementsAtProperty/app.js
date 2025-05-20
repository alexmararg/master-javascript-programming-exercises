function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if (!obj[key] || !Array.isArray(obj[key])|| obj[key].length === 0) return 0;
  let a=obj[key];
  let n=0;
  for (let i = 0; i < a.length; i++) {
    n+=a[i];
  }
  return n/a.length;
}