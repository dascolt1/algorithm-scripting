//Asked by Amazon, rturn the number of jewels that are also stones
//Will use hash map to cut down run time to O(n)
//jewels = "abc", stones = "ac", return 2
//jewels = "Af", stones = "AaaddfFf", return 3
//jewels = "AYOPD", stones = "ayopd", return 0

function jewelsAndStones(jewels, stones) {
	const map = new Map();
	let answer = 0;

	for(let i = 0;i < jewels.length;i++) {
		map.set(jewels[i], i);
	}

	for(stone in stones) {
		if(map.has(stones[stone])) answer++;
	}

	return answer;
}