import { Queue } from "../src"

describe('Queue Test File', () => {

    test('cut the line should add items at the first of the queue', () => {
        const q = new Queue<number>()
        q.enqueue(10)
        q.enqueue(11)
        q.cutTheLine(9)
        q.cutTheLine(8)
        q.cutTheLine(7)
        q.cutTheLine(6)
        expect(q.map(value => value)).toEqual([])
    })

})
