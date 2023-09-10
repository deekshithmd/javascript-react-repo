import React from "react";

class Queue {
    constructor() {
        this.items = {};
        this.frontIndex = 0;
        this.backIndex = 0;
    }
    enqueue(item) {
        this.items[this.backIndex] = item;
        this.backIndex += 1;
    }
    dequeue() {
        const item = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex += 1;
        return item;
    }
    peak() {
        return this.items[this.frontIndex]
    }
    printQueue() {
        return this.items
    }
}

export const QueueComponent = () => {

    const queue = new Queue();

    queue.enqueue(5);
    queue.enqueue(6);
    queue.enqueue(9);
    console.log(queue.dequeue())
    console.log(queue.peak());
    console.log(queue.printQueue())

    return <h1>Queue</h1>
}