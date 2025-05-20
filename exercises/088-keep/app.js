// Write your function here
function keep(ar,e) {
   let a=[];
   a=ar.filter(function equ(el) {
    return el===e;
   });
   return a;
}