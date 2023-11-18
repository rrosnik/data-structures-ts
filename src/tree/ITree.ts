import { ITreeNode } from './ITreeNode'

export interface ITree<T> {

    /** returns the root element */
    get root(): ITreeNode<T>
    /** sets root node to the tree */
    set root(value: ITreeNode<T>)


    /**
     * sets root node for the tree
     * @param {ITreeNode<T>} value 
     * @return {ITree<T>}
     */
    setRoot(value: ITreeNode<T>): this


    /**
     * it traverse all the treenodes - Breadth-First Search
     * @param {(node:ITreeNode<T>):void} callback 
     */
    traverseBF(callback: (node: ITreeNode<T>) => void)

    /**
     * it traverse all the treenodes - Depth-First Search
     * @param {(node:ITreeNode<T>):void} callback 
     */
    traverseDF(callback: (node: ITreeNode<T>) => void)
}