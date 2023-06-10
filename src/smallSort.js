import { validateArray } from './validateArray';

// This uses InsertionSort
export function smallOrNearlySortedSort(array) {
	if (!validateArray(array)) {
		if (!Array.isArray(array)) {
			throw new Error('Input must be an array.');
		} else {
			throw new Error('Input array must not be empty.');
		}
	}
	for (let i = 1; i < array.length; i++) {
		let key = array[i];
		let j = i - 1;
		while (j >= 0 && array[j] > key) {
			array[j + 1] = array[j];
			j = j - 1;
		}
		array[j + 1] = key;
	}
	return array;
}
