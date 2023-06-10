// Helper function to validate input
export function validateArray(input) {
	if (!Array.isArray(input)) {
		console.error('Input must be an array.');
		return false;
	}

	if (input.length === 0) {
		console.error('Input array must not be empty.');
		return false;
	}

	return true;
}
