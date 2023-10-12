import CircularLinkedListNode from "./CircularLinkedListNode";

// export default class CircularLinkedList<T> extends Array<T> {
export default class CircularLinkedList<T> {

    private _list: Array<CircularLinkedListNode<T>> = []
    private _head: CircularLinkedListNode<T> | null

    constructor(items: Array<T> = []) {
        items.forEach(i => this.add(i))
    }

    /**
     * clears all data in the object
     */
    clear() { this._head = null; this._list = [] }

    /**
     * returns the last node in the list
     * @returns {CircularLinkedListNode<T>}
     */
    getLast(): CircularLinkedListNode<T> { return this._list.at(-1) }

    /**
     * returns the first node in the list
     * @returns {CircularLinkedListNode<T>}
     */
    getFirst(): CircularLinkedListNode<T> { return this._head as CircularLinkedListNode<T> }


    /**
     * Takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
     * @param {number} index 
     * @returns {CircularLinkedListNode<T>}
     */
    at(index: number): CircularLinkedListNode<T> {
        return this._list.at(index);
    }


    /**
     * adds en element to the end of the list
     * @param {T} element 
     * @returns {this}
     */
    add(element): this {
        // creates a new node
        var node = new CircularLinkedListNode(element);

        // if list is Empty add the element and make it head
        if (this._head == null) {
            this._head = node;
            this._head.prev = node;
            this._head.next = node;
        } else {
            var current: CircularLinkedListNode<T> = this._list.at(-1);
            // add node
            current.next = node;
            node.prev = current;
            node.next = this._head
            this._head.prev = node
        }
        this._list.push(node)

        return this
    }

    /**
     * insert element at the position index of the list
     * @param {T} element 
     * @param {number} index 
     * @returns {this}
     */
    insertAt(element: T, index: number): this {
        if (index < 0 || index > this.length)
            throw new Error("CircularLinkedList.insertAt | index i out of range")
        else {
            // creates a new CircularLinkedListNode
            var node = new CircularLinkedListNode(element);
            var curr, prev;

            curr = this._head;
            prev = curr?.prev;
            var it = 0;

            // iterate over the list to find the position to insert
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }

            // adding an element
            node.next = curr;
            node.prev = prev;
            if (curr) curr.prev = node;
            if (prev) prev.next = node;
            this._list.splice(index, 0, node)
        }


        return this
    }

    /**
     * removes an element from the specified location
     * @param {number} index 
     * @returns {CircularLinkedListNode<T>}
     */
    removeFrom(index): CircularLinkedListNode<T> | -1 {
        if (index < 0 || index >= this.length)
            throw new Error("CircularLinkedList.removeFrom | Please Enter a valid index");
        else {

            var curr: CircularLinkedListNode<T> = this._list.at(index),
                prev: CircularLinkedListNode<T> = curr?.prev,
                next: CircularLinkedListNode<T> = curr?.next

            if (prev) prev.next = next
            if (next) next.prev = prev

            this._list.splice(index, 1)
            this._head = this._list[0] ?? null

            return curr
        }
    }

    /**
     * removes a given element from the list - first matched element
     * @param {T} element 
     * @returns {CircularLinkedListNode<T>}
     */
    removeElement(element: T): CircularLinkedListNode<T> | -1 {
        const index: number = this.indexOf(element)
        if (index === -1) return -1;

        var curr: CircularLinkedListNode<T> = this._list.at(index),
            prev: CircularLinkedListNode<T> = curr?.prev,
            next: CircularLinkedListNode<T> = curr?.next

        if (prev) prev.next = next
        if (next) next.prev = prev

        this._list.splice(index, 1)
        this._head = this._list[0] ?? null

        return curr
    }

    /**
     * Returns the index of the first element, otherwise -1
     * @param {T} element 
     * @returns {number}
     */
    indexOf(element: T) { return this._list.findIndex(n => n.element === element) }

    /**
     * checks the list for empty
     * @returns {boolean}
     */
    isEmpty() { return this.length == 0 }

    /**
     * gives the size of the list
     */
    get length(): number { return this._list.length }

    toArray(): Array<T> { return this._list.map(i => i.element) }


}

export { CircularLinkedList }