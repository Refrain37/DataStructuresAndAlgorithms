class Node {
    constructor(val, next = null) {
        this.value = val
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.count = 0
    }

    append(element) {
        const node = new Node(element)

        if (this.head === null) {
            this.head = node
        } else {
            let current = this.head

            while (current.next) {
                current = current.next
            }

            current.next = node
        }

        this.count += 1
    }

    insert(element, position) {
        if (position < 0 || position > this.size()) {
            return
        }

        const node = new Node(element)
        if (position === 0) {
            if (this.head === null) {
                this.head = node
            } else {
                node.next = this.head
                this.head = node
            }
        } else {
            let index = 0
            let current = this.head
            let previous = null

            while (index < position) {
                previous = current
                current = current.next
                index += 1
            }

            previous.next = node
            node.next = current
        }


        this.count += 1

    }

    remove(element) {
        const index = this.indexOf(element)
        return this.removeAt(index)
    }

    removeAt(position) {
        if (position < 0 || position > this.size()) {
            return
        }

        if (position === 0) {
            this.head = this.head.next
        } else {
            let current = this.head
            let previous = null
            let index = 0

            while (index < position) {
                previous = current
                current = current.next
                index += 1
            }

            previous.next = current.next
        }

        this.count -= 1
    }

    get(position) {
        if (position < 0 || position > this.size()) {
            return
        }

        let index = 0
        let current = this.head
        while (index < position) {
            current = current.next
        }

        return current.value
    }

    indexOf(element) {
        if (this.isEmpty()) {
            return
        }

        let index = 0
        let current = this.head
        while (current) {
            if (current.value === element) {
                return index
            } else {
                current = current.next
                index += 1
            }
        }

        return -1
    }

    isEmpty() {
        return this.count > 0
    }

    size() {
        return this.count
    }
}