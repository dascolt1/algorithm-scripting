//function to translate english words into pig latin 
//test-> pigLatin("eight") then be "eightway"
function translatePigLatin(str) {
  //regex checks for vowel in front
  if(str.match(/^[aeiou]/))str = `${str}way`
  //regex to match for non vowel first letters
  if(str.match(/^[^aeiou]+/g)){
    let consCluster = str.match(/^[^aeiou]+/g)
    str = `${str.substring(consCluster[0].length,str length)}${consCluster}ay`
  }
  return str;
}
