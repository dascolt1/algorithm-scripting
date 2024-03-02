//This question is asked by Google.
//Given an array, nums, and an integer k, return whether or not two unique indices exist such that nums[i] = nums[j] 
//and the two indices i and j are at most k elements apart. 
//nums = [1, 2, 1], k = 1, return false.
//nums = [2, 3, 2], k = 2, return true.


function identicalElements(nums, k) {
	
	const map = new Map();

	for(let i = 0;i < nums.length;i++) {
		if(map.has(nums[i])) {
		    return i - map.get(nums[i]) <= k
		}else {
			map.set(nums[i], i)
		}
	}

	return true;
}