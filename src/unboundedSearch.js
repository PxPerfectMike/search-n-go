// Uses Exponential Search
export function unboundedSearch(array, target) {
	if (array[0] === target) return 0;

	let i = 1;
	while (i < array.length && array[i] <= target) {
		i *= 2;
	}

	return binarySearch(target, array, i / 2, Math.min(i, array.length - 1));
}
