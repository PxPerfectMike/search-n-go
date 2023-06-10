import { validateArray } from './validateArray';

// Uses Interpolation Search
export function distributionSearch(array, target) {
	if (!validateArray(array)) {
		if (!Array.isArray(array)) {
			throw new Error('Input must be an array.');
		} else {
			throw new Error('Input array must not be empty.');
		}
	}
	let low = 0;
	let high = array.length - 1;

	while (low <= high && target >= array[low] && target <= array[high]) {
		if (low === high) {
			if (array[low] === target) return low;
			return -1;
		}
		const pos =
			low +
			Math.floor(
				((high - low) / (array[high] - array[low])) * (target - array[low])
			);

		if (array[pos] === target) return pos;

		if (array[pos] < target) low = pos + 1;
		else high = pos - 1;
	}
	return -1;
}
