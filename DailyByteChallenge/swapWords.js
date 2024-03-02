//Given a string s, reverse the words.
//Note: You may assume that there are no leading or trailing whitespaces and each word within s is only separated by a single whitespace. 
//The Daily Byte -> Byte Daily The

function swapWords(str) {
	return str.split(" ").reverse().join(" ");
}