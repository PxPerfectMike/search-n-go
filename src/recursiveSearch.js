import { validateArray } from './validateArray';

// Uses Recursive Search with loose equality
export function recursiveSearch(array, target) {
	validateArray(array);
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
