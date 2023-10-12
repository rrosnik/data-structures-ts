import { DoublyLinkedListNode } from "./DoublyLinkedListNode";

// linkedlist class
export class DoublyLinkedList<T>{

    private _list: Array<DoublyLinkedListNode<T>> = []
    private _head: DoublyLinkedListNode<T> | null

    constructor(items: Array<T> = []) {
        items.forEach(i => this.add(i))
    }

    /**
     * clears all data in the object
     */
    clear() { this._head = null; this._list = [] }

    /**
     * returns the last node in the list
     * @returns {DoublyLinkedListNode<T>}
     */
    getLast(): DoublyLinkedListNode<T> { return this._list.at(-1) }

    /**
     * returns the first node in the list
     * @returns {DoublyLinkedListNode<T>}
     */
    getFirst(): DoublyLinkedListNode<T> { return this._head as DoublyLinkedListNode<T> }


    /**
     * Takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
     * @param {number} index 
     * @returns {DoublyLinkedListNode<T>}
     */
    at(index: number): DoublyLinkedListNode<T> {
        return this._list.at(index);
    }


    /**
     * adds en value to the end of the list
     * @param {T} value 
     * @returns {this}
     */
    add(value): this {
        // creates a new node
        var node = new DoublyLinkedListNode(value);

        // if list is Empty add the value and make it head
        if (this._head == null) {
            this._head = node;
        } else {
            var current: DoublyLinkedListNode<T> = this._list.at(-1);
            // add node
            current.next = node;
            node.prev = current;
        }
        this._list.push(node)

        return this
    }





    /**
     * insert value at the position index of the list
     * @param {T} value 
     * @param {number} index 
     * @returns {this}
     */
    insertAt(value: T, index: number): this {
        if (index < 0 || index > this.length)
            throw new Error("CircularLinkedList.insertAt | index i out of range")
        else {
            // creates a new DoublyLinkedListNode
            var node = new DoublyLinkedListNode(value);
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

            // adding an value
            node.next = curr;
            node.prev = prev;
            if (curr) curr.prev = node;
            if (prev) prev.next = node;
            this._list.splice(index, 0, node)
        }


        return this
    }

    /**
     * removes an value from the specified location
     * @param {number} index 
     * @returns {DoublyLinkedListNode<T>}
     * @throws {Error}
     */
    removeAt(index): DoublyLinkedListNode<T> {

        var curr: DoublyLinkedListNode<T> = this._list.at(index),
            prev: DoublyLinkedListNode<T> = curr?.prev,
            next: DoublyLinkedListNode<T> = curr?.next

        if (prev) prev.next = next
        if (next) next.prev = prev

        this._list.splice(index, 1)
        this._head = this._list[0] ?? null

        return curr
    }

    /**
     * removes a given value from the list - first matched value
     * @param {T} value 
     * @returns {DoublyLinkedListNode<T>}
     */
    removeValue(value: T): DoublyLinkedListNode<T> {
        const index: number = this.indexOf(value)
        return this.removeAt(index)
    }

    /**
     * Returns the index of the first value, otherwise -1
     * @param {T} value 
     * @returns {number}
     */
    indexOf(value: T) { return this._list.findIndex(n => n.value === value) }

    /**
     * checks the list for empty
     * @returns {boolean}
     */
    isEmpty() { return this.length == 0 }

    /**
     * gives the size of the list
     */
    get length(): number { return this._list.length }


    toArray(): Array<T> { return this._list.map(i => i.value) }


    forEach(callback: (value: DoublyLinkedListNode<T>, index: number, array: DoublyLinkedListNode<T>[]) => void): void {
        this._list.forEach(callback)
    }

}
