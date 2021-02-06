//algorithm that generates a hashtag not exceeding 140 chars and that aren't
//blank, code is o(n) time and o(1) space

function generateHashtag (str) { 
  str = str.split(' ').map(capitalize).join('');
  
  if(str.length >= 140 || str.length === 0) return false;
  
  return `#${str}`
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
