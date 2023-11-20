//pretty much same as anagram except now looking for the odd character out
//can be done O(nlogn) with search or O(n) with hash maps
//s = "foobar", t = "barfoot", return 't'
//s = "ide", t = "idea", return 'a'
//s = "coding", t "ingcod", return ''

function spotTheDifferenceSorting(s, t) {
	let a = s.split("").sort().join(""), b = t.split("").sort().join("");

	for(let i = 0;i < b.length;i++) {
	    if(b[i] !== a[i]) {
			return b[i]
	   }

	   return '';
}


function spotTheDifferenceHash(s, t) {
	const m = new Map();

	for(i in s) {
		m.set(s[i], "")
	}

	for(i in t) {
		if(!m.has(t[i])){
			return t[i]
		}
	} 
	return ''
}