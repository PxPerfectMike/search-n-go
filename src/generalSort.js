import { validateArray } from './validateArray';

// This uses QuickSort
export function generalSort(array) {
	if (!validateArray(array)) {
		if (!Array.isArray(array)) {
			throw new Error('Input must be an array.');
		} else {
			throw new Error('Input array must not be empty.');
		}
	}
	if (array.length <= 1) {
		return array;
	}
	const pivot = array[array.length - 1];
	const left = [];
	const right = [];
	for (let i = 0; i < array.length - 1; i++) {
		if (array[i] < pivot) {
			left.push(array[i]);
		} else {
			right.push(array[i]);
		}
	}
	return [...generalSort(left), pivot, ...generalSort(right)];
}
