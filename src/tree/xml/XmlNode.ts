import { ITreeNode } from "../ITreeNode";

export class XmlNode implements ITreeNode<Element> {

    private _element: Element
    private _attributes: Map<string, string>
    protected _children: Array<XmlNode>

    constructor(element: Element) {
        this._element = element

        // extract attributes
        for (let i = 0; i < element.attributes.length; i++)
            this.setAttribute(element.attributes[i].name, element.attributes[i].value)

        if (element.childNodes)
            Array.from(element.childNodes).forEach((child: Element) => this.add(new XmlNode(child)));

    }

    get children(): Array<XmlNode> { return this._children }
    get parent(): this { return this.parent }
    get root(): this {
        if (this.parent) return this.parent.root
        return this
    }

    /**
     * adds a child to the treeNode's children 
     * @param {T} child
     * @returns {XmlNode} 
     */
    add(child: XmlNode): this {
        this._children.push(child)
        return this
    }

    /**
     * removes a child from treeNode's children 
     * @param {T} child 
     * @returns {TreeNode}
     */
    remove(child: XmlNode): this {
        this._children = this._children.filter((node) => {
            return node !== child;
        })
        return this
    }



    /**
     * adds an attribute - if the name exists then it updates the attributes
     * @param {string} name 
     * @param {string} value 
     * @returns {XmlNode}
     */
    setAttribute(name: string, value: string): this {
        this._attributes.set(name, value)
        this._children[0]
        return this
    }

    /**
     * returns an attribute - if the name does not exist then it returns undefined
     * @param {string} name 
     * @returns {XmlNode}
     */
    getAttribute(name: string): string { return this._attributes.get(name) }

    /**
     * checks a child before it is attached to the children list
     * @param {Element} child 
     * @returns {boolean}
     */
    checkChild(child: Element): boolean { return true }
}