//this function validates a palindrome ignoring case and non alphabetic chars as seen in facebook interview
//"A man, a plan, a canal: Panama." returns true

function validPalindrome(str) {
	str = str.replace(/[^a-z]+/gi, '').toLowerCase();

	str.split("").reverse().join("") === str ? return true : return false;
}