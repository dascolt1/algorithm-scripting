//function to find missing letter in a lower case ascending alphabet
//test fearNotLetter("abce") -> returns "d"
//this solution is O(n) because it only uses 1 loop

function fearNotLetter(str) {
  let i = 0;
  for(let j = 1;j < str.length;j++){
    if((str.charCodeAt(i) + 1) != str.charCodeAt(j)){
      return String.fromCharCode(str.charCodeAt(i) + 1)
    }
    i++;
  }
  return undefined;
}
