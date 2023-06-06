// Helper function to validate input
export function validateArray(input) {
	if (!Array.isArray(input)) {
		throw new Error('Input must be an array.');
	}

	if (input.length === 0) {
		throw new Error('Input array must not be empty.');
	}
}
