import { Queue } from "./Queue";

export class Stack<T>  {

    private _items: Array<T> = [];

    constructor(...items: Array<T>) {
        if (items.length) this._items = items;
    }

    /**
     * adds elements to the stack
     * @param {T} item 
     */
    push(...items: Array<T>): number {
        return this._items.push(...items);
    }

    /**
     * return the top most element from the stack
     * but does'nt delete it.     
     */
    peek() {
        return this._items[this._items.length - 1];
    }

    /**
     * 
     * @returns {boolean} return boolean
     */
    isEmpty(): boolean {
        return this._items.length == 0;
    }

    /**
    * return top most element in the stack
    * and removes it from the stack
    * Underflow if stack is empty
    */
    pop(): T {
        if (!this._items.length) return undefined;
        return this._items.pop();
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

    /**
     * it return the legth of Stack
     */
    get length(): number { return this._items.length; }

    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: unknown): T {
        return this._items.reduce(callbackfn);
    }

    /**
     * converts the stack to a queue
     * @returns {Queue<T>}
     */
    toQueue(): Queue<T> { return new Queue(...this._items) }

}