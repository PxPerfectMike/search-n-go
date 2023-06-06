import { validateArray } from './validateArray';

// Uses Fibonacci Search
export function largeArraySearch(array, target) {
	validateArray(array);
	let fibMMm2 = 0;
	let fibMMm1 = 1;
	let fibM = fibMMm2 + fibMMm1;

	while (fibM < array.length) {
		fibMMm2 = fibMMm1;
		fibMMm1 = fibM;
		fibM = fibMMm2 + fibMMm1;
	}

	let offset = -1;

	while (fibM > 1) {
		let i = Math.min(offset + fibMMm2, array.length - 1);

		if (array[i] < target) {
			fibM = fibMMm1;
			fibMMm1 = fibMMm2;
			fibMMm2 = fibM - fibMMm1;
			offset = i;
		} else if (array[i] > target) {
			fibM = fibMMm2;
			fibMMm1 = fibMMm1 - fibMMm2;
			fibMMm2 = fibM - fibMMm1;
		} else return i;
	}

	if (fibMMm1 && array[offset + 1] === target) return offset + 1;

	return -1;
}
