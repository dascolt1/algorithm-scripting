//This question is asked by Google.
//Given an array, nums, and an integer k, return whether or not two unique indices exist such that nums[i] = nums[j] 
//and the two indices i and j are at most k elements apart. 
//nums = [1, 2, 1], k = 1, return false.
//nums = [2, 3, 2], k = 2, return true.


function identicalElements(nums, k) {
	let i = 0;
	let j = i+1;

	while(j < nums.length) {
		if(nums[i] !== nums[j] && j <= k) {
			j++;
			if(nums[i] === nums[j]) {
				return true;
			}else {
				i++;
				j = i +1;
			}
		}else {
			return false;
		}
	}

	//return false;
}