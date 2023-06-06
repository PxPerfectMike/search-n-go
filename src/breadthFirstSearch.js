import { validateGraph } from './validateGraph';

// Uses Breadth-First Search
export function breadthFirstSearch(graph, root, target) {
	validateGraph(graph);
	const queue = [root];
	const visited = new Set();

	while (queue.length > 0) {
		const node = queue.shift();

		if (node === target) return true;

		if (!visited.has(node)) {
			visited.add(node);

			const neighbors = graph[node];
			for (let neighbor of neighbors) {
				queue.push(neighbor);
			}
		}
	}
	return false;
}
