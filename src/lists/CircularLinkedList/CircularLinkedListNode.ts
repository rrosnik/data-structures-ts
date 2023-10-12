
/**
 * holds any element and connects it to the other element
 */
export class CircularLinkedListNode<T> {
    private _element: T;
    private _next: CircularLinkedListNode<T>;
    private _prev: CircularLinkedListNode<T>;

    constructor(element: T) {
        this._element = element;
    }

    /**
     * returns next element node
     * @returns {CircularLinkedListNode<T>}
     */
    get next(): CircularLinkedListNode<T> { return this._next }


    /**
     * sets next element for this
     */
    set next(value: CircularLinkedListNode<T>) { this._next = value }


    /**
     * returns previous element node
     * @returns {CircularLinkedListNode<T>}
     */
    get prev(): CircularLinkedListNode<T> { return this._prev }

    /**
     * sets previous element for this
     */
    set prev(value: CircularLinkedListNode<T>) { this._prev = value }

    /**
     * returns current element
     */
    get element(): T { return this._element }
}


