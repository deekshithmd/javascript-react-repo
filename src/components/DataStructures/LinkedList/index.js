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
    addAt(value, index) {
        if (index < 0 || index > this.size) {
            console.log("Enter valid index")
        }
        else {
            const node = new Node(value);
            let prev, current;

            if (index === 0) {
                node.next = this.head;
                this.head = node;
            } else {
                current = this.head;
                let it = 0;
                while (it < index) {
                    prev = current;
                    current = current.next;
                    it++;
                }
                prev.next = node;
                node.next = current;
            }
            this.size++;
        }

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
    removeFrom(index) {
        if (index < 0 || index > this.size) {
            console.log("Enter valid index")
        }
        else {
            let prev, current, it = 0;
            current = this.head;
            prev = current;
            if (index === 0) {
                this.head = current.next;
            }
            else {
                while (it < index) {
                    it++;
                    prev = current;
                    current = current.next;
                }
                prev.next = current.next;
            }
            this.size--;
            return current.data;
        }
        return -1;
    }
    removeItem(value) {
        let prev, current;
        current = this.head;
        prev = null;
        while (current !== null) {
            if (current.data === value) {
                if (prev == null) {
                    this.head = current.next
                }
                else {
                    prev.next = current.next;
                }
                this.size--;
                return current.data;
            }
            prev = current;
            current = current.next;

        }
        return -1;

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
    list.addAt(10, 1);
    // list.remove();
    // list.remove();
    // list.remove();
    list.removeFrom(1);
    list.removeItem(5)
    list.printList();
    return <h1>LinkedList</h1>
}