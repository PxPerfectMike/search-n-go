import { validateArray } from './validateArray';

// Uses Exponential Search
export function unboundedSearch(array, target) {
	if (!validateArray(array)) {
		if (!Array.isArray(array)) {
			throw new Error('Input must be an array.');
		} else {
			throw new Error('Input array must not be empty.');
		}
	}
	if (array[0] === target) return 0;

	let i = 1;
	while (i < array.length && array[i] <= target) {
		i *= 2;
	}

	return binarySearch(target, array, i / 2, Math.min(i, array.length - 1));
}
