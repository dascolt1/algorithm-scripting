//this algorithm replaces a string with ... if it is longer than the max string 
//length
//o(n) time and o(1) space

function truncateString(str, num) {
	if(num < str.length) return str.substring(0, num)+'...';
	return str;
}
