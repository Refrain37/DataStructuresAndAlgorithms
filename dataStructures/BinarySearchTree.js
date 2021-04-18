class TreeNode {
    constructor(key, val) {
        this.key = key
        this.val = val
        this.left = null
        this.right = null
    }
}

const searchNode = Symbol()
const getReplace = Symbol()

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    /* private method */
    [searchNode](key) {
        let current = this.root

        while (current) {
            if (key > current.key) {
                current = current.right
            } else if (key < current.key) {
                current = current.left
            } else {
                return current
            }
        }
        return false
    }

    [getReplace]() {}

    /* public method */
    insert(key, value) {
        const node = new TreeNode(key, value)

        if (this.root === null) {
            this.root = node
        } else {
            let current = this.root
            while (current) {
                if (current.key < node.key) {
                    if (current.left === null) {
                        current.left = node
                        return
                    } else {
                        current = current.left
                    }
                } else {
                    if (current.right === null) {
                        current.right = node
                        return
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }

    update(key, newVal) {
        const node = this[searchNode](key)

        if (node) {
            node.val = newVal
            return true
        }

        return false
    }

    search(key) {
        const node = this[searchNode](key)
        return node ? node.val : false
    }

    remove(key) {}

    min() {}

    max() {}

    preOrderTraverse() {}

    inOrderTraverse() {}

    postOrderTraverse() {}
}