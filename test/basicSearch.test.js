import { basicSearch } from '../src/basicSearch';

describe('basicSearch', () => {
	it('should return the index of the target value in the array', () => {
		const array = [2, 4, 6, 8, 10];
		expect(basicSearch(array, 6)).toBe(2);
		expect(basicSearch(array, 10)).toBe(4);
	});

	it('should return -1 if the target value is not found in the array', () => {
		const array = [2, 4, 6, 8, 10];
		expect(basicSearch(array, 3)).toBe(-1);
		expect(basicSearch(array, 7)).toBe(-1);
	});

	it('should return the index of the target object in the array', () => {
		const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
		expect(basicSearch(array, { id: 2 })).toBe(1);
	});

	it('should return -1 if the target object is not found in the array', () => {
		const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
		expect(basicSearch(array, { id: 4 })).toBe(-1);
	});
});
