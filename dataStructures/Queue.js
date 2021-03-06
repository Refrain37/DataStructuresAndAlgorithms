class Queue {
    constructor() {
        this.items = []
    }

    enqueue(...item) {
        this.items.push(...item)
    }

    dequeue() {
        if (this.isEmpty()) {
            return
        }

        return this.items.shift()
    }

    front() {
        if (this.isEmpty()) {
            return
        }
        return this.items[0]
    }

    isEmpty() {
        return this.isEmpty.length > 0
    }

    size() {
        return this.items.length
    }
}