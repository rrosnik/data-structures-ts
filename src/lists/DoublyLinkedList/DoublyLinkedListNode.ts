// User defined class node
export class DoublyLinkedListNode<T> {


    private _element: T;
    private _next: DoublyLinkedListNode<T>;
    private _prev: DoublyLinkedListNode<T>;

    constructor(element: T) {
        this._element = element;
    }

    /**
     * returns next element node
     * @returns {DoublyLinkedListNode<T>}
     */
    get next(): DoublyLinkedListNode<T> { return this._next }


    /**
     * sets next element for this
     */
    set next(value: DoublyLinkedListNode<T>) { this._next = value }


    /**
     * returns previous element node
     * @returns {DoublyLinkedListNode<T>}
     */
    get prev(): DoublyLinkedListNode<T> { return this._prev }

    /**
     * sets previous element for this
     */
    set prev(value: DoublyLinkedListNode<T>) { this._prev = value }

    /**
     * returns current element
     */
    get element(): T { return this._element }
}


