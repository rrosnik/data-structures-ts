import { Heap } from './Heap';
import { IMinHeap } from './interface';

export class MinHeap<T> extends Heap<T> implements IMinHeap<T> {

    heapifyUp(): void {
        let index = this.size() - 1
        while (this.hasParent(index) && this.compareFunction(this._heap[index], this.parent(index)) < 0) {
            this.swap(index, this.parentIndex(index))
            index = this.parentIndex(index)
        }
    }

    heapifyDown(): void {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.smallestChildIndex(index);
            if (this.compareFunction(this._heap[index], this._heap[smallerChildIndex]) < 0) break;
            else this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }

}