import { basicSearch } from '../src/index.js';

describe('Basic Search', () => {
	let data = [10, 20, 30, 40, 50];

	test('should return correct index when element is present', () => {
		expect(basicSearch(data, 30)).toBe(2);
	});

	test('should return -1 when element is not present', () => {
		expect(basicSearch(data, 60)).toBe(-1);
	});

	test('should return -1 for empty array', () => {
		expect(basicSearch([], 30)).toBe(-1);
	});

	test('should work with strings', () => {
		let stringData = ['apple', 'banana', 'cherry'];
		expect(basicSearch(stringData, 'banana')).toBe(1);
		expect(basicSearch(stringData, 'pear')).toBe(-1);
	});

	test('should work with non-primitive types', () => {
		let objectData = [{ id: 1 }, { id: 2 }, { id: 3 }];
		expect(basicSearch(objectData, { id: 2 })).toBe(1);
		expect(basicSearch(objectData, { id: 4 })).toBe(-1);
	});
});
