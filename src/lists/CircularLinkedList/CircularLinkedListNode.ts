
/**
 * holds any value and connects it to the other value
 */
export class CircularLinkedListNode<T> {
    private _value: T;
    private _next: CircularLinkedListNode<T>;
    private _prev: CircularLinkedListNode<T>;

    constructor(value: T) {
        this._value = value;
    }

    /**
     * returns next value node
     * @returns {CircularLinkedListNode<T>}
     */
    get next(): CircularLinkedListNode<T> { return this._next }


    /**
     * sets next value for this
     */
    set next(value: CircularLinkedListNode<T>) { this._next = value }


    /**
     * returns previous value node
     * @returns {CircularLinkedListNode<T>}
     */
    get prev(): CircularLinkedListNode<T> { return this._prev }

    /**
     * sets previous value for this
     */
    set prev(value: CircularLinkedListNode<T>) { this._prev = value }

    /**
     * returns current value
     */
    get value(): T { return this._value }
}


