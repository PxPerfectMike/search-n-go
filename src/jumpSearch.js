import { validateArray } from './validateArray';

export function jumpSearch(array, value) {
	if (!validateArray(array)) {
		if (!Array.isArray(array)) {
			throw new Error('Input must be an array.');
		} else {
			throw new Error('Input array must not be empty.');
		}
	}
	let len = array.length;
	let step = Math.floor(Math.sqrt(len));
	let prev = 0;

	while (array[Math.min(step, len) - 1] < value) {
		prev = step;
		step += Math.floor(Math.sqrt(len));
		if (prev >= len) {
			return -1;
		}
	}

	while (array[prev] < value) {
		prev++;
		if (prev == Math.min(step, len)) {
			return -1;
		}
	}

	if (array[prev] == value) {
		return prev;
	}

	return -1;
}
