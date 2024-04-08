export interface IHeap<T> {
    /**
     * adds a value to the heap
     * @param value a value you want to add
     * @returns {this}
     */
    add(value: T): this

    /**
     * removes a value from the heap
     * @param value a value you want to remove
     * @returns {this}
     */
    remove(): T

    /**
     * returns the size of the heap
     * @returns {number}
     */
    size(): number

    /**
     * returns the top value of the heap
     * @returns {T}
     */
    peek(): T

    /**
     * swaps two values in the heap
     * @param index1 an index of the first value
     * @param index2 an index of the second value
     */
    swap(index1: number, index2: number): void

    /**
     * returns the top value of the heap and removes it from the heap
     * @returns {T}
     */
    poll(): T

    /**
     * returns the values of the heap in an array
     * @returns {T[]}
     */
    values(): T[]

    /**
     * returns true if the heap is empty
     * @returns {boolean}
     */
    isEmpty(): boolean

    /**
     * returns the index of the parent
     * @param index an index of the child
     * @returns {number}
     */
    parentIndex(index: number): number

    /**
     * returns the index of the left child
     * @param index an index of the parent
     * @returns {number}
     */
    leftChildIndex(index: number): number

    /**
     * returns the index of the right child
     * @param index an index of the parent
     * @returns {number}
     */
    rightChildIndex(index: number): number

    /**
     * returns the parent
     * @param index an index of the child
     * @returns {T}
     */
    parent(index: number): T

    /**
     * returns the left child
     * @param index an index of the parent
     * @returns {T}
     */
    leftChild(index: number): T

    /**
     * returns the right child
     * @param index an index of the parent
     * @returns {T}
     */
    rightChild(index: number): T

    /**
     * returns true if the parent has a left child
     * @param index an index of the parent
     * @returns {boolean}
     */
    hasParent(index: number): boolean

    /**
     * returns true if the parent has a right child
     * @param index an index of the parent
     * @returns {boolean}
     */
    hasLeftChild(index: number): boolean

    /**
     * returns true if the parent has a right child
     * @param index an index of the parent
     * @returns {boolean}
     */
    hasRightChild(index: number): boolean

    /**
     * returns the index of the smallest child
     * @param index an index of the parent
     * @returns {number}
     */
    smallestChild(index: number): T

    /**
     * returns the index of the largest child
     * @param index an index of the parent
     * @returns {number}
     */
    largestChild(index: number): T

    /**
     * returns the index of the smallest child
     * @param index an index of the parent
     * @returns {number}
     */
    smallestChildIndex(index: number): number

    /**
     * returns the index of the largest child
     * @param index an index of the parent
     * @returns {number}
     */
    largestChildIndex(index: number): number

    heapifyUp(): void
    heapifyDown(): void

}