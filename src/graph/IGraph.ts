export interface IGraph<T> {

    /**
     * creates an edge between two nodes
     * @param from a node you want to add edge from
     * @param to a node you want to add edge to
     * @returns {this}
     */
    addEdge(from: T, to: T): this

    /**
     * removes an edge between two nodes
     * @param from a node you want to remove edge from
     * @param to a node you want to remove edge to
     * @returns {this}
     */
    removeEdge(from: T, to: T): this

    /**
     * returns true if there is an edge between two nodes
     * @param from a node you want to check edge from
     * @param to a node you want to check edge to
     * @returns {boolean}
     */
    hasEdge(from: T, to: T): boolean


    /**
     * adds a node to the graph
     * @param value a value of the node
     * @returns {this}
     */
    addNode(value: T): this

    /**
     * removes a node from the graph
     * @param value a value of the node
     * @returns {this}
     */
    removeNode(value: T): this

    /**
     * returns all the nodes in the graph
     * @returns {T[]}
     */
    getNodes(): T[]

    /**
     * returns all the edges in the graph
     * @returns {Array<[T, T]>}
     */
    getEdges(): Array<[T, T]>

    /**
     * it traverse all the nodes - Breadth-First Search
     * @param {(node:T):void} callback 
     */
    traverseBF(startNode: T, callback: (node: T) => void)

    /**
     * it traverse all the nodes - Depth-First Search
     * @param {(node:T):void} callback 
     */
    traverseDF(startNode: T, callback: (node: T) => void, visited: Set<T>): void




}