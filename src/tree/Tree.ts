import { ITree } from './ITree'
import { ITreeNode } from './ITreeNode'

export class Tree<T> implements ITree<T>{
    private _root: ITreeNode<T>

    constructor(root?: ITreeNode<T>) {
        if (root) this.root = root
    }


    get root(): ITreeNode<T> { return this._root }
    set root(value: ITreeNode<T>) { this._root = this.root }


    setRoot(value: ITreeNode<T>): this {
        this.root = value
        return this
    }


    traverseBF(callback: (node: ITreeNode<T>) => void) {
        const arr: Array<ITreeNode<T>> = [this._root]
        while (arr.length) {
            const node: ITreeNode<T> = arr.shift() as ITreeNode<T>
            arr.push(...node.children)
            callback(node)
        }
    }

    traverseDF(callback: (node: ITreeNode<T>) => void) {
        const arr = [this._root]
        while (arr.length) {
            const node: ITreeNode<T> = arr.shift() as ITreeNode<T>
            arr.unshift(...node.children)
            callback(node)
        }
    }
}
