import { validateArray } from './validateArray';

// This uses QuickSort
export function generalSort(array) {
	validateArray(array);
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
