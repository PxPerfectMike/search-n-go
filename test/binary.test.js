import { binarySearch } from '../src/binary';

describe('binarySearch', () => {
	it('should return the index of the value in a sorted array', () => {
		const array = [2, 4, 6, 8, 10];
		expect(binarySearch(4, array)).toBe(1);
		expect(binarySearch(10, array)).toBe(4);
	});

	it('should return -1 if the value is not found in the array', () => {
		const array = [2, 4, 6, 8, 10];
		expect(binarySearch(3, array)).toBe(-1);
		expect(binarySearch(7, array)).toBe(-1);
	});
});
