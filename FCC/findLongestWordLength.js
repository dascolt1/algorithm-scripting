//this function takes in a single var called str, and returns a number
//with the longest string in the sentence
//"Google do a barrel roll" returns 6
//this is o(n) time and o(1) space

function findLongestWordLength(str) {
  str = str.split(" ");
  let answer = 0;
  let i = 1;
  for(let j = 0;j < str.length;j++){
    if(answer < str[j].length) answer = str[j].length;
    i++;
  }
  return answer;
} 
