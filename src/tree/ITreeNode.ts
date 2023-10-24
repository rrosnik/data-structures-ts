export interface ITreeNode<T> {

    /** returns an array including all children of the treenode */
    get children(): Array<ITreeNode<T>>

    /** returns the parent of the node */
    get parent(): this

    /** returns the root node of the tree */
    get root(): this

    /**
     * adds a child to the treeNode's children 
     * @param {T} child
     * @returns {ITreeNode<T>}
     */
    add(child: ITreeNode<T>): this

    /**
     * removes a child from treeNode's children 
     * @param {T} child 
     * @returns {ITreeNode<T>}
     */
    remove(child: ITreeNode<T>): this
}