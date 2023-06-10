import { validateArray } from './validateArray';

export function basicSearch(array, target) {
	if (!validateArray(array)) {
		if (!Array.isArray(array)) {
			throw new Error('Input must be an array.');
		} else {
			throw new Error('Input array must not be empty.');
		}
	}

	for (let i = 0; i < array.length; i++) {
		if (typeof target === 'object' && typeof array[i] === 'object') {
			if (JSON.stringify(array[i]) === JSON.stringify(target)) {
				return i;
			}
		} else if (array[i] === target) {
			return i;
		}
	}
	return -1;
}
