//this function checks how many deletions it would take
//if the next char in the string isnt alternating

function alternatingCharacters(s) {
    s = s.split('');
    let deletions = 0;
    for(let i = 0; i < s.length;i++){
        if(s[i] === s[i+1]){
            deletions++
        }
    }
    return deletions
}
