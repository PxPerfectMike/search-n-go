export function binarySearch(value, array) {
	let lower = 0;
	let upper = array.length - 1;

	while (lower <= upper) {
		const middle = lower + Math.floor((upper - lower) / 2);

		if (value === array[middle]) {
			return middle && array[middle];
		}

		if (value < array[middle]) {
			upper = middle - 1;
		} else {
			lower = middle + 1;
		}
	}
	return -1;
}
