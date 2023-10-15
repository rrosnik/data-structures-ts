export class Queue<T> {

    private _items: Array<T>;

    constructor(...items: Array<T>) {
        if (items.length) this._items.push(...items)
    }

    /**
     * adds elements to queue
     * @param {T} item 
     */
    enqueue(item: T) { this._items.push(item); }

    /**
     * removing element from the queue
     * returns undefined when called
     * on empty queue
     * @returns {T}
     */
    dequeue(): T { return this._items.shift(); }


    /**
     * returns the Front element of
     * the queue without removing it.
     * @returns {T} return T
     */
    peek(): T { return this._items[0]; }


    /**
     * return true if the queue is empty.
     * @returns {boolean} return boolean
     */
    isEmpty(): boolean { return this._items.length == 0; }


    /**
     * it return the legth of Queue
     */
    get length(): number { return this._items.length; }

    /**
     * clear all the elements of the queue
     */
    clear(): void {

    }

    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void {
        this._items.forEach(callbackfn);
    }

    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[] {
        return this._items.map<U>(callbackfn);
    }
    at(index: number): T | undefined {
        return this._items[index];
    };
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: unknown): T {
        return this._items.reduce(callbackfn);
    }
}