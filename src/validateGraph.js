export function validateGraph(graph) {
	if (typeof graph !== 'object' || graph === null) {
		throw new Error('Graph must be a non-null object.');
	}

	for (let node in graph) {
		if (!Array.isArray(graph[node])) {
			throw new Error(`Neighbors of node ${node} must be an array.`);
		}

		for (let neighbor of graph[node]) {
			if (!(neighbor in graph)) {
				throw new Error(`Invalid neighbor ${neighbor} of node ${node}.`);
			}
		}
	}
}
