export class TreeNode<T> {

    private _value: T;
    protected _children: Array<TreeNode<T>> = []
    protected _parent: this | undefined

    constructor(value: T) {
        this._value = value;
    }

    /** returns an array including all children of the treenode */
    get children(): Array<TreeNode<T>> { return this._children }

    /** returns the parent of the node */
    get parent(): this { return this.parent }

    /** returns the root node of the tree */
    get root(): this {
        if (this.parent) return this.parent.root
        return this
    }

    level() { }
    depth() { }
    height() { }
    childs() { }

    /**
     * adds a child to the treeNode's children 
     * @param {T} child
     * @returns {TreeNode} 
     */
    add<U extends TreeNode<T>>(child: U): this {
        this._children.push(child)
        return this
    }

    /**
     * removes a child from treeNode's children 
     * @param {T} child 
     * @returns {TreeNode}
     */
    remove(child: TreeNode<T>): this {
        this._children = this._children.filter((node) => {
            return node !== child;
        })
        return this
    }
}
