// Write your function here
function countAllCharacters(st) {
    let o={}
    for (let i = 0; i < st.length; i++) {
        let l=st[i];
        if(o[l]!==o[l]||!o[l]){
            o[l]=1;
        }else{
            o[l]++;
        }
    }
    return o;
}