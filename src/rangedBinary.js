import { validateArray } from './validateArray';

export function binarySearchRange(array, minValue, maxValue) {
	validateArray(array);
	let lower = 0;
	let upper = array.length - 1;

	while (lower <= upper) {
		const middle = lower + Math.floor((upper - lower) / 2);

		if (array[middle] >= minValue && array[middle] <= maxValue) {
			let lowerIndex = binarySearchForRangeEnd(
				minValue,
				array,
				lower,
				middle,
				-1
			);
			let upperIndex = binarySearchForRangeEnd(
				maxValue,
				array,
				middle,
				upper,
				1
			);

			return array.slice(lowerIndex, upperIndex + 1);
		}

		if (array[middle] < minValue) {
			lower = middle + 1;
		} else {
			upper = middle - 1;
		}
	}

	return [];
}

function binarySearchForRangeEnd(value, array, start, end, direction) {
	let lower = start;
	let upper = end;

	while (lower <= upper) {
		const middle = lower + Math.floor((upper - lower) / 2);

		if (
			direction === -1 &&
			array[middle] >= value &&
			(middle === 0 || array[middle - 1] < value)
		) {
			return middle;
		} else if (
			direction === 1 &&
			array[middle] <= value &&
			(middle === array.length - 1 || array[middle + 1] > value)
		) {
			return middle;
		}

		if (direction === -1) {
			upper = middle - 1;
		} else {
			lower = middle + 1;
		}
	}

	return -1;
}
