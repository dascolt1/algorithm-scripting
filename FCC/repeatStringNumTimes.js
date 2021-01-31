//this algorithm repeats a string n amount of times
//it is o(n) time and o(1) space
//repeatStringNumTimes("*",3) returns ***
function repeatStringNumTimes(str, num) {
  let answer = ""
  for(let i = 0; i < num;i++){
    answer = answer + str;
  }
  return answer;
}
