import { IHeap } from './interface';

export abstract class Heap<T> implements IHeap<T>{

    protected _heap: T[] = []
    protected compareFunction: (a: T, b: T) => number
    constructor(compareFunction: (a: T, b: T) => number) {
        this.compareFunction = compareFunction
    }

    size(): number { return this._heap.length }
    values(): T[] { return this._heap }
    isEmpty(): boolean { return this._heap.length == 0 }

    parentIndex(index: number): number { return Math.floor((index - 1) / 2) }

    leftChildIndex(index: number): number { return 2 * index + 1 }
    rightChildIndex(index: number): number { return 2 * index + 2 }

    hasLeftChild(index: number): boolean { return this.leftChildIndex(index) < this.size() }
    hasRightChild(index: number): boolean { return this.rightChildIndex(index) < this.size() }
    hasParent(index: number): boolean { return this.parentIndex(index) >= 0 }

    parent(index: number): T { return this._heap[this.parentIndex(index)] }
    leftChild(index: number): T { return this._heap[this.leftChildIndex(index)] }
    rightChild(index: number): T { return this._heap[this.rightChildIndex(index)] }


    ////////////////////////////////////


    smallestChildIndex(index: number): number {
        return this.compareFunction(this.leftChild(index), this.rightChild(index)) < 0 ? this.leftChildIndex(index) : this.rightChildIndex(index)
    }
    largestChildIndex(index: number): number {
        return this.compareFunction(this.leftChild(index), this.rightChild(index)) > 0 ? this.leftChildIndex(index) : this.rightChildIndex(index)
    }

    smallestChild(index: number): T {
        return this.compareFunction(this.leftChild(index), this.rightChild(index)) < 0 ? this.leftChild(index) : this.rightChild(index)
    }

    largestChild(index: number): T {
        return this.compareFunction(this.leftChild(index), this.rightChild(index)) > 0 ? this.leftChild(index) : this.rightChild(index)
    }

    add(value: T): this {
        this._heap.push(value);
        this.heapifyUp();
        return this
    }

    remove(): T {
        if (this.size() == 0) return undefined
        const item = this._heap[0]
        this._heap[0] = this._heap.pop()
        this.heapifyDown()
        return item
    }

    peek(): T { return this._heap[0] }
    poll(): T { return this.remove() }

    swap(index1: number, index2: number): void {
        [this._heap[index1], this._heap[index2]] = [this._heap[index2], this._heap[index1]]
    }

    abstract heapifyUp(): void
    abstract heapifyDown(): void

}