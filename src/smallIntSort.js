import { validateArray } from './validateArray';

// This uses CountingSort
export function smallIntegersSort(array) {
	validateArray(array);
	let max = Math.max(...array);
	let min = Math.min(...array);
	let count = Array(max - min + 1).fill(0);

	array.forEach((num) => {
		count[num - min]++;
	});

	let z = 0;
	for (let i = min; i <= max; i++) {
		while (count[i - min]-- > 0) {
			array[z++] = i;
		}
	}
	return array;
}
