// Write your function here
function getIndexOf(le,st) {
    for (let i = 0; i < st.length; i++) {
        if (st[i]===le) {
            return i;
        }
    }
    return -1;
}