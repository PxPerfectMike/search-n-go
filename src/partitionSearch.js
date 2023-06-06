// Uses Ternary Search
export function partitionSearch(
	array,
	target,
	left = 0,
	right = array.length - 1
) {
	if (right >= left) {
		const mid1 = left + Math.floor((right - left) / 3);
		const mid2 = right - Math.floor((right - left) / 3);

		if (array[mid1] === target) return mid1;
		if (array[mid2] === target) return mid2;

		if (target < array[mid1])
			return partitionSearch(array, target, left, mid1 - 1);
		else if (target > array[mid2])
			return partitionSearch(array, target, mid2 + 1, right);
		else return partitionSearch(array, target, mid1 + 1, mid2 - 1);
	}

	return -1;
}
