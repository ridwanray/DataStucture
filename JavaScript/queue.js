class Queue {
    constructor() {
        this.items = new Array(0);
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    count() {
        return this.items.length
    }
}

q1 = new Queue();
q1.enqueue('ayo')
q1.enqueue('tobi')
q1.enqueue('ray')

console.log(q1.count())