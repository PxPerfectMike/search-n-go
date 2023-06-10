import { validateArray } from './validateArray';

// Uses Recursive Search with strict equality
export function strictRecursiveSearch(array, target) {
	if (!validateArray(array)) {
		if (!Array.isArray(array)) {
			throw new Error('Input must be an array.');
		} else {
			throw new Error('Input array must not be empty.');
		}
	}
	const targetType = typeof target;

	for (let i = 0; i < array.length; i++) {
		const currentType = typeof array[i];

		if (Array.isArray(array[i])) {
			const result = strictRecursiveSearch(target, array[i]);
			if (result) {
				return true;
			}
		} else if (currentType === targetType && array[i] === target) {
			return true;
		}
	}

	return false;
}
