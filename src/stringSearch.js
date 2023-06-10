import { validateArray } from './validateArray';

export function stringSort(array, sortType) {
	if (!validateArray(array)) {
		if (!Array.isArray(array)) {
			throw new Error('Input must be an array.');
		} else {
			throw new Error('Input array must not be empty.');
		}
	}
	let result;

	switch (sortType) {
		case 'cs': // Case Sensitive
			result = array.sort();
			break;

		case 'cs-rev': // Case Sensitive Reverse
			result = array.sort().reverse();
			break;

		case 'ci': // Case Insensitive
			result = array.sort((a, b) =>
				a.toLowerCase().localeCompare(b.toLowerCase())
			);
			break;

		case 'ci-rev': // Case Insensitive Reverse
			result = array
				.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
				.reverse();
			break;

		case 'ls': // Locale Sensitive
			result = array.sort((a, b) => a.localeCompare(b));
			break;

		case 'ls-rev': // Locale Sensitive Reverse
			result = array.sort((a, b) => a.localeCompare(b)).reverse();
			break;

		case 'nat': // Natural Sorting
			result = array.sort((a, b) =>
				a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
			);
			break;

		case 'nat-rev': // Natural Sorting Reverse
			result = array
				.sort((a, b) =>
					a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
				)
				.reverse();
			break;

		case 'len': // Length-based Sorting
			result = array.sort((a, b) => a.length - b.length);
			break;

		case 'len-rev': // Length-based Sorting Reverse
			result = array.sort((a, b) => a.length - b.length).reverse();
			break;

		default:
			throw new Error(
				`Invalid sort type: ${sortType}. Please check the documentation for valid sort types.`
			);
	}

	return result;
}
