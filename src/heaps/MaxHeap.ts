import { Heap } from './Heap';
import { IMaxHeap } from './interface';

export class MaxHeap<T> extends Heap<T> implements IMaxHeap<T> {

    heapifyUp(): void {
        let index = this.size() - 1
        while (this.hasParent(index) && this.compareFunction(this._heap[index], this.parent(index)) > 0) {
            this.swap(index, this.parentIndex(index))
            index = this.parentIndex(index)
        }
    }
    heapifyDown(): void {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let largestChildIndex = this.largestChildIndex(index);
            if (this.compareFunction(this._heap[index], this._heap[largestChildIndex]) > 0) break;
            else this.swap(index, largestChildIndex);
            index = largestChildIndex;
        }
    }

}