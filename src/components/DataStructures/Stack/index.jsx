import React from "react";

class Stack {
    constructor() {
        this.items = [];
    }

    push(v) {
        this.items.push(v)
    }

    pop() {
        if (this.items.length === 0) {
            return "UNDERFLOW"
        }
        else {
            return this.items.pop()
        }
    }

    isEmpty() {
        if (this.items.length === 0) {
            return true;
        }
        else { return false }
    }
    peek() {
        if (this.items.length === 0) {
            return "EMPTY STACK"
        }
        else {
            return this.items[this.items.length - 1]
        }
    }
}

export const StackComponent = () => {
    const stack = new Stack();
    console.log(stack.push(3));
    console.log(stack.push(5));
    console.log(stack.pop());
    console.log(stack.peek());
    console.log(stack.isEmpty())
    console.log(stack.pop());
    return (
        <h1>Stack</h1>
    )
}