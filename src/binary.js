import { validateArray } from './validateArray';

export function binarySearch(value, array) {
	if (!validateArray(array)) {
		if (!Array.isArray(array)) {
			throw new Error('Input must be an array.');
		} else {
			throw new Error('Input array must not be empty.');
		}
	}

	let lower = 0;
	let upper = array.length - 1;

	while (lower <= upper) {
		const middle = lower + Math.floor((upper - lower) / 2);

		if (value === array[middle]) {
			return middle;
		}

		if (value < array[middle]) {
			upper = middle - 1;
		} else {
			lower = middle + 1;
		}
	}
	return -1;
}
