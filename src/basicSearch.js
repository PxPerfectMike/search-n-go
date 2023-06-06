import { validateArray } from './validateArray';

// Uses Linear Search
export function basicSearch(array, target) {
	validateArray(array);
	for (let i = 0; i < array.length; i++) {
		if (array[i] === target) {
			return i;
		}
	}
	return -1;
}
