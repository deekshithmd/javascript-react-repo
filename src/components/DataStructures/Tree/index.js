import React from "react";

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    insert(data) {
        const node = new Node(data);
        if (this.root == null) {
            this.root = node;
        }
        else {
            this.insertNode(this.root, node)
        }
    }
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left == null) {
                node.left = newNode
            }
            else {
                this.insertNode(node.left, newNode)
            }
        }
        else {
            if (node.right == null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode)
            }
        }
    }
    remove(data){
        this.root=this.remoNode(this.root,data)
    }
    removNode(node,key){
        if(node==null)
            return null;
        else if(key<node.data){
            
        }
    }
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left)
            console.log(node.data);
            this.inorder(node.right);
        }
    }
    preorder(node) {
        if (node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right)
        }
    }
    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data)
        }
    }
    getRootNode() {
        return this.root
    }
}

export const TreeComponent = () => {
    const tree = new Tree();
    tree.insert(4);
    tree.insert(6);
    tree.insert(3);
    tree.insert(2);
    tree.insert(1);
    tree.insert(8);
    tree.insert(5);
    //      4
    //    3    6
    //  2    5   8
    //1
    const root = tree.getRootNode()
    console.log('inorder')
    tree.inorder(root);
    console.log('preorder')
    tree.preorder(root);
    console.log('postorder')
    tree.postorder(root);

    return <h1>Tree</h1>
}