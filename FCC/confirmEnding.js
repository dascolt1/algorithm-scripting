//algorithms that returns true or false if the string ends with the 
//target, basically .endsWith() method in es15
//confirmEnding("Bastian","n") should return true

function confirmEnding(str, target) {
  let difference = str.length - target.length;
  return str.substring(difference, str.length) === target;
}
