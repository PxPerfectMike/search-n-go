// Uses Depth-First Search
export function depthFirstSearch(graph, root, target) {
	const stack = [root];
	const visited = new Set();

	while (stack.length > 0) {
		const node = stack.pop();

		if (node === target) return true;

		if (!visited.has(node)) {
			visited.add(node);

			const neighbors = graph[node];
			for (let neighbor of neighbors) {
				stack.push(neighbor);
			}
		}
	}
	return false;
}
