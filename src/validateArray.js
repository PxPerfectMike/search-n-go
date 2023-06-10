export function validateArray(input) {
	if (!Array.isArray(input) || input.length === 0) {
		console.error('Input must be an array and must not be empty.');
		return false;
	}

	return true;
}
