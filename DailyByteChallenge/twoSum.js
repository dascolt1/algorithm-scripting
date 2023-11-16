//classic 2 sum problem
//[1, 3, 8, 2], k = 10, return true (8 + 2)
//[3, 9, 13, 7], k = 8, return false


function twoSum(arr, k) {
	for(int i = 0;i < arr.length;i++) {
		for(int j = i + 1;j < arr.length;j++) {
			if(arr[i] + arr[j] === k) {
				return true;
			}
		}
	}

	return false;
}