export function jumpSearch(value, sortedArray) {
	let len = sortedArray.length;
	let step = Math.floor(Math.sqrt(len));
	let prev = 0;

	while (sortedArray[Math.min(step, len) - 1] < value) {
		prev = step;
		step += Math.floor(Math.sqrt(len));
		if (prev >= len) {
			return -1;
		}
	}

	while (sortedArray[prev] < value) {
		prev++;
		if (prev == Math.min(step, len)) {
			return -1;
		}
	}

	if (sortedArray[prev] == value) {
		return prev;
	}

	return -1;
}
