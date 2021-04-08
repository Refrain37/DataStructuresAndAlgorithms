class Stack {
    constructor() {
        this.items = []
    }

    push(...item) {
        this.items.push(...item)
    }

    pop() {
        if (this.isEmpty()) {
            return
        }

        return this.items.pop()
    }

    isEmpty() {
        return this.items.length > 0
    }

    peek() {
        if (this.isEmpty()) {
            return
        }

        return this.items[this.items.length - 1]
    }

    size() {
        return this.items.length
    }

    clear() {
        this.items = []
    }
}