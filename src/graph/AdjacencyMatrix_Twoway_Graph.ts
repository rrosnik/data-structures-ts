import { IGraph } from './IGraph';

export class AdjacencyMatrix_Twoway_Graph implements IGraph<number> {

    matrix: number[][] = []

    constructor(numNodes: number) {
        this.matrix = []
        for (let i = 0; i < numNodes; i++) {
            this.matrix.push(new Array(numNodes).fill(0))
        }
    }

    addEdge(from: number, to: number): this {
        this.matrix[from][to] = 1
        this.matrix[to][from] = 1
        return this
    }
    removeEdge(from: number, to: number): this {
        this.matrix[from][to] = 0
        this.matrix[to][from] = 0
        return this
    }
    hasEdge(from: number, to: number): boolean {
        return this.matrix[from][to] === 1
    }

    addNode(value: number): this {
        throw new Error('Method not implemented.');
    }

    removeNode(value: number): this {
        throw new Error('Method not implemented.');
    }

    getNode(value: number): number {
        throw new Error('Method not implemented.');
    }

    getNodes(): number[] {
        throw new Error('Method not implemented.');
    }

    getEdges(): [number, number][] {
        throw new Error('Method not implemented.');
    }

    traverseBF(startNode: number, callback: (node: number) => void, visited: Set<number> = new Set()) {

    }

    traverseDF(startNode: number, callback: (node: number) => void, visited: Set<number> = new Set()): void {
        visited.add(startNode)
    }

}