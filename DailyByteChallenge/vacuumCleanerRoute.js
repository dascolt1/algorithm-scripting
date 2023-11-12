//This question is asked by Amazon and determines if a vacuum will return to its orginal spot
//"LR", return true
//"URURD", return false
//"RUULLDRD", return true

function vacuumCleanerRoute(str) {
	
	let l = 0, r = 0, u = 0, d = 0;
	
	for(let i = 0;i < str.length;i++) {
	    if(str[i] === 'L') {
	        l++;
	        r--;
	    }else if(str[i] === 'R') {
	        r++;
	        l--;
	    }else if(str[i] === 'U') {
	        u++;
	        d--;
	    }else if(str[i] === 'D') {
	        d++;
	        u--;
	    }
	}
	return l == 0 && r == 0 && u == 0 && d == 0;
}