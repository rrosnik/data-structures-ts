// (c) 2018, Mariusz Nowak
// SPDX-License-Identifier: ISC
// Derived from https://github.com/medikoo/lru-queue
// https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU
// Least recently used (LRU)
export class LruQueue<T> {
    queue = new Map<string, T>()
    map = new Map<string, T>()


    base = 1
    index = 0


    get size(): number { return this.queue.size }


    // hit(id) {
    //     const oldIndex = this.map.get(id);
    //     const nuIndex = ++index
    //     this.queue[nuIndex] = id
    //     map[id] = nuIndex
    //     if (!oldIndex) {
    //         ++size
    //         if (size <= limit) return undefined
    //         id = queue[base]
    //         del(id)
    //         return id
    //     }
    //     delete queue[oldIndex]
    //     if (base !== oldIndex) return undefined
    //     while (!hasOwnProperty.call(queue, ++base)) continue
    //     return undefined
    // }
    // delete(id) {
    //     const oldIndex = this.map.get(id)
    //     if (!oldIndex) return
    //     this.queue.delete(id)
    //     this.map.delete(id)
    // }
    // clear() {
    //     size = index = 0
    //     base = 1
    //     queue = Object.create(null)
    //     map = Object.create(null)
    // }

    // limit = Math.abs(limit)


}
