// Write your function here
function select(ar,ob) {
    let a={};
    for (let i = 0; i < ar.length; i++) {
        let k = ar[i];
        if (!ob[k]||ob[k]!==undefined) {
            a[k]=ob[k];
        }
    }
    return a;
}