import React from "react";

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(value) {
        const node = new Node(value);
        let current;
        if (this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    remove() {
        console.log("data", this.head)
        let prev = null;
        let current = this.head;
        if (current.next == null) {
            console.log("List is empty")
        }
        else {
            while (current.next) {
                prev = current;
                current = current.next;
            }
            prev.next = null;
            console.log("removed", current.data)
        }
    }
    printList() {
        let current = this.head;
        let str = "";
        while (current) {
            str += " " + current.data;
            current = current.next;
        }
        console.log("List Data", str)
    }
}

export const LinkedListComponent = () => {
    const list = new LinkedList();
    list.add(3);
    list.add(5);
    list.add(8);
    list.remove();
    list.remove();
    list.remove();
    list.printList();
    return <h1>LinkedList</h1>
}