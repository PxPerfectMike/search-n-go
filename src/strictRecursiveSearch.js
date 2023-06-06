// Uses Recursive Search with strict equality
export function strictRecursiveSearch(target, array) {
	const targetType = typeof target;

	for (let i = 0; i < array.length; i++) {
		const currentType = typeof array[i];

		if (Array.isArray(array[i])) {
			const result = strictRecursiveSearch(target, array[i]);
			if (result) {
				return true;
			}
		} else if (currentType === targetType && array[i] === target) {
			return true;
		}
	}

	return false;
}
