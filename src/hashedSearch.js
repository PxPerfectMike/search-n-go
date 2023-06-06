// Uses Hashing
export function hashedSearch(hashTable, target) {
	const index = hashFunction(target);
	return hashTable[index];
}

function hashFunction(key) {
	// Implement a hash function here
}
