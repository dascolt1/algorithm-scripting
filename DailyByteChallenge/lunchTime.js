// This question is asked by Apple. You are serving people in a lunch line and need to ensure each person gets a “balanced” meal. 
// A balanced meal is a meal where there exists the same number of food items as drink items. 
// Someone is helping you prepare the meals and hands you food items (i.e. F) or a drink items (D) 
// in the order specified by the items string. Return the maximum number of balanced meals you are able to create without being able to modify items.
// Note: items will only contain F and D characters.
// items = "FDFDFD", return 3
// items = "FDFFDFDD", return 2

function lunchTime(items) {
	let answer = 0;
	let balanced = 0

	for(let i = 0;i < items.length;i++) {
		if(items[i] === "F") {
			balanced++;
		}else if(items[i] === "D") balanced--;

		if(balanced === 0) answer++
	}

   return answer;
}