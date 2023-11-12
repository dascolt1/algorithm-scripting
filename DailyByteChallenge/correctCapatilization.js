//this algorithm is asked by google, return true if everything is capatilized, nothing is capitalized ot the first letter isn capatilized
//USA returns true
//Somerst return true
//gfhUsjkds returns false

function correctCap(str) {

	let answer = false;

	if(str.toLowerCase() === str) {
		answer = true;
	}else if(str.toUpperCase() === str) {
		answer = true;
	}

	for(let i = 1;i < str.length;i++){
		if(str[0].toUpperCase() === str[0] && str[i].toLowerCase() === str[i]) {
			answer = true;
		}else{
			 answer = false;
		}
	}
	return answer;
}