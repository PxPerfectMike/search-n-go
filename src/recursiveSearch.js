import { validateArray } from './validateArray';

// Uses Recursive Search with loose equality
export function recursiveSearch(array, target) {
	if (!validateArray(array)) {
		if (!Array.isArray(array)) {
			throw new Error('Input must be an array.');
		} else {
			throw new Error('Input array must not be empty.');
		}
	}
	for (let i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			const result = recursiveSearch(target, array[i]);
			if (result) {
				return true;
			}
		} else if (array[i] == target) {
			return true;
		}
	}

	return false;
}
