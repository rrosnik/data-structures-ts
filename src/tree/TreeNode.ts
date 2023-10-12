export default class TreeNode<T> {

    private _value: T;
    private _children: Array<TreeNode<T>> = []

    constructor(value: T) {
        this._value = value;
    }

    /** returns an array including all children of the treenode */
    get children(): Array<TreeNode<T>> { return this._children }

    level() { }
    depth() { }
    height() { }
    parent() { }
    childs() { }

    /**
     * adds a child to the treeNode's children 
     * @param {T} child
     * @returns {TreeNode} 
     */
    add(child: T): this {
        this._children.push(new TreeNode(child))
        return this
    }

    /**
     * removes a child from treeNode's children 
     * @param {T} child 
     * @returns {TreeNode}
     */
    remove(child: T): this {
        this._children = this._children.filter((node) => {
            return node._value !== child;
        })
        return this
    }
}

export { TreeNode }