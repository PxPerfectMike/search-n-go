import { binarySearch } from '../src/index.js';

describe('Binary Search', () => {
	let sortedData = [10, 20, 30, 40, 50];

	test('should return correct index when element is present', () => {
		expect(binarySearch(30, sortedData)).toBe(2);
	});

	test('should return -1 when element is not present', () => {
		expect(binarySearch(60, sortedData)).toBe(-1);
	});

	test('should return -1 for empty array', () => {
		expect(binarySearch(30, [])).toBe(-1);
	});

	test('should return -1 if array is not sorted', () => {
		let unsortedData = [30, 10, 50, 20, 40];
		expect(binarySearch(30, unsortedData)).not.toBe(2);
	});

	test('should work with strings', () => {
		let sortedStringData = ['apple', 'banana', 'cherry'];
		expect(binarySearch('banana', sortedStringData)).toBe(1);
		expect(binarySearch('pear', sortedStringData)).toBe(-1);
	});

	test('should throw error with non-array data', () => {
		expect(() => binarySearch(30, 'notAnArray')).toThrow();
		expect(() => binarySearch(30, 12345)).toThrow();
		expect(() => binarySearch(30, {})).toThrow();
	});
});
