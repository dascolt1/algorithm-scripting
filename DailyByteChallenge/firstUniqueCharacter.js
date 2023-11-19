//Asked by microsoft return the index of the first unique character
//solutionj using hashmap can be done in O(n) time and O(n) space
//"abcabd", return 2
//"thedailybyte", return 1
//"developer", return 0


function firstUniqueCharacter(s) {
	const map = new Map();

	for(i in s) {
		if(map.has(s[i])) {
			map.set(s[i], map.get(s[i])+1)
		}else {
			map.set(s[i], 1);
		}
	}

	for(i in s) {
		if(map.get(s[i]) === 1) return i
	}

	return -1
}