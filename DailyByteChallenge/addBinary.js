//this algorithm is asked by apple and takes in 2 string representations of a binary number and adds them adn returns a string representation of binary
//"100" + "1", return "101"
//"1" + "0", return  "1"
//"11" + "1", return "100"

function addBinary(str1, str2) {
	let a = parseInt(str1, 2), b = parseInt(str2, 2);
	return (a+b).toString(2);
}