//Given an array of integers, nums, each element in the array either appears once or twice. 
//Return a list containing all the numbers that appear twice. 

function takeTwo(nums) {
	const map = new Map();
	let answer = []

	for(let i = 0;i < nums.length;i++) {
		if(map.has(nums[i])) {
			answer.push(nums[i])
		}else {
			map.set(nums[i], '')
		}
	}
	return answer;
}