/*
*
*Converts a sentence into spinal case 
*
*test case ex -> spinalCase('AllThe-small Things') returns all-the-small-things
*
*/
function spinalCase(str) {
  str = str.match(/[a-zA-Z][a-z]+/g).join(" ")
  .replace(/[_\s]/g, '-')
  .atoLowerCase()
  return str;
}

