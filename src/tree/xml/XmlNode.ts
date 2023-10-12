import Tree from "../Tree";
import TreeNode from "../TreeNode";

export default class XmlNode extends TreeNode<any> {

    private _attributes: Map<string, string>;

    /**
     * add a new attribute to the xmlNode
     * @param {string} name 
     * @param {string} value 
     * @returns {XmlNode}
     */
    setAttribute(name: string, value: string): this {
        this._attributes.set(name, value)
        return this
    }


}

export { XmlNode }


