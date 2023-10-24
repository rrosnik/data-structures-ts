import { ITree } from "../ITree";
import { XmlNode } from "./XmlNode";

export class Xml implements ITree<Element> {


    private _root: XmlNode

    get root(): XmlNode { return this._root }
    set root(value: XmlNode) { this._root = this.root }

    setRoot(value: XmlNode): this {
        this.root = value
        return this
    }

    traverseBF(callback: (node: XmlNode) => void) {
        const arr: Array<XmlNode> = [this._root]
        while (arr.length) {
            const node: XmlNode = arr.shift() as XmlNode
            arr.push(...node.children)
            callback(node)
        }
    }

    traverseDF(callback: (node: XmlNode) => void) {
        const arr = [this._root]
        while (arr.length) {
            const node: XmlNode = arr.shift() as XmlNode
            arr.unshift(...node.children)
            callback(node)
        }
    }



}
