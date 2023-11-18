import { CircularLinkedListNode } from './CircularLinkedListNode'

// export default class CircularLinkedList<T> extends Array<T> {
export class CircularLinkedList<T> {

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
        return this._list.at(index)
    }


    /**
     * adds en value to the end of the list
     * @param {T} value 
     * @returns {this}
     */
    add(...values: T[]): this {
        values.forEach(value => {

            // creates a new node
            var node = new CircularLinkedListNode(value);

            // if list is Empty add the value and make it head
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
        })

        return this
    }

    /**
     * insert value at the position index of the list
     * @param {T} value 
     * @param {number} index 
     * @returns {this}
     */
    insertAt(index: number, ...values: T[]): this {
        if (index < 0 || index > this.length)
            throw new Error('CircularLinkedList.insertAt | index i out of range')
        else {

            values.reverse().forEach(value => {

                // creates a new CircularLinkedListNode
                var node = new CircularLinkedListNode(value);
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
            })
        }



        return this
    }

    /**
     * removes an value from the specified location
     * @param {number} index 
     * @returns {CircularLinkedListNode<T>}
     */
    removeFrom(index): CircularLinkedListNode<T> | -1 {
        if (index < 0 || index >= this.length)
            throw new Error('CircularLinkedList.removeFrom | Please Enter a valid index')
        else {

            const curr: CircularLinkedListNode<T> = this._list.at(index),
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
     * removes a given value from the list - first matched value
     * @param {T} value 
     * @returns {CircularLinkedListNode<T>}
     */
    removeValue(value: T): CircularLinkedListNode<T> | -1 {
        const index: number = this.indexOf(value)
        if (index === -1) return -1

        const curr: CircularLinkedListNode<T> = this._list.at(index),
            prev: CircularLinkedListNode<T> = curr?.prev,
            next: CircularLinkedListNode<T> = curr?.next

        if (prev) prev.next = next
        if (next) next.prev = prev

        this._list.splice(index, 1)
        this._head = this._list[0] ?? null

        return curr
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


    forEach(callback: (value: CircularLinkedListNode<T>, index: number, array: CircularLinkedListNode<T>[]) => void): void {
        this._list.forEach(callback)
    }

    map(callback: (value: CircularLinkedListNode<T>, index: number, array: CircularLinkedListNode<T>[]) => any): any[] {
        return this._list.map(callback)
    }
}

