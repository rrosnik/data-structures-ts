import { IGraph } from './IGraph';

export class AdjacencyList_Twoway_Graph<T> implements IGraph<T> {

    private nodes: Map<T, Set<T>> = new Map()

    private linkedBy: Map<T, Set<T>> = new Map()

    constructor() {
        this.nodes = new Map()
        this.linkedBy = new Map()
    }

    addNode(value: T): this {
        this.nodes.set(value, new Set())
        this.linkedBy.set(value, new Set())
        return this
    }

    removeNode(value: T): this {
        throw new Error('Method not implemented.')
    }

    addEdge(from: T, to: T): this {
        this.nodes.get(from).add(to)
        // this.linkedBy.get(to).add(from)

        this.nodes.get(to).add(from)
        // this.linkedBy.get(from).add(to)
        return this
    }
    removeEdge(from: T, to: T): this {
        this.nodes.get(from).delete(to)
        this.nodes.get(to).delete(from)
        return this
    }
    hasEdge(from: T, to: T): boolean {
        return this.nodes.get(from).has(to)
    }


    getNode(value: T): T {
        throw new Error('Method not implemented.');
    }

    getNodes(): T[] {
        return Array.from(this.nodes.keys())
    }
    getEdges(): [T, T][] {
        throw new Error('Method not implemented.');
    }

    traverseBF(startNode: T, callback: (node: T) => void) {
        const visited = new Set<T>()
        const queue: T[] = [startNode]
        while (queue.length > 0) {
            const node = queue.shift()
            if (!visited.has(node)) {
                visited.add(node)
                callback(node)
                this.nodes.get(node).forEach(neighbor => {
                    queue.push(neighbor)
                })
            }
        }
    }

    traverseDF(startNode: T, callback: (node: T) => void, visited: Set<T>): void {
        visited.add(startNode)
        this.nodes.get(startNode).forEach(node => {
            if (!visited.has(node)) {
                this.traverseDF(node, callback, visited)
            }
        })
    }
}