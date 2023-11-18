//asked by facebook given 2 strings s and t return whether they are anagrams of each other
//can be done in O(nlogn) time by sorting or O(n) by using 2 hash maps
//s = "cat", t = "tac", return true
//s = "listen", t = "silent", return true
//s = "program", t = "function", return false

function validAnagramSorting(s, t) {
	let a = s.split("").sort().join(""), b = t.split("").sort().join("");
	return a === b;
}

function validAnagramHash(s, t) {
	const m1 = new Map();
	const m2 = new Map();

	for(i in s) {

		if(m1.has(s[i])) {
			m1.set(s[i], m1.get(s[i] + 1))
		}else {
			m1.set(s[i], 1);
		}
		
	}

	for(i in t) {

		if(m2.has(t[i])) {
			m2.set(t[i], m2.get(t[i]+1))
		}else {
			m2.set(t[i], 1);
		}
		
	}


	return compareMaps(m1, m2)
}

function compareMaps(map1, map2) {
    let testVal;
    if (map1.size !== map2.size) {
        return false;
    }
    for (let [key, val] of map1) {
        testVal = map2.get(key);

        if (testVal !== val || (testVal === undefined && !map2.has(key))) {
            return false;
        }
    }
    return true;
}