// User defined class node
export class DoublyLinkedListNode<T> {


    private _value: T;
    private _next: DoublyLinkedListNode<T>;
    private _prev: DoublyLinkedListNode<T>;

    constructor(value: T) {
        this._value = value;
    }

    /**
     * returns next value node
     * @returns {DoublyLinkedListNode<T>}
     */
    get next(): DoublyLinkedListNode<T> { return this._next }


    /**
     * sets next value for this
     */
    set next(value: DoublyLinkedListNode<T>) { this._next = value }


    /**
     * returns previous value node
     * @returns {DoublyLinkedListNode<T>}
     */
    get prev(): DoublyLinkedListNode<T> { return this._prev }

    /**
     * sets previous value for this
     */
    set prev(value: DoublyLinkedListNode<T>) { this._prev = value }

    /**
     * returns current value
     */
    get value(): T { return this._value }
}


