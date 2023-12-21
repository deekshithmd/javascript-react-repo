import React from "react";

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  findMinNode(node) {
    if (node.left == null) {
      return node;
    } else this.findMinNode(node.left);
  }

  insert(data) {
    const node = new Node(data);
    if (this.root == null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }
  removeNode(node, key) {
    if (node == null) return null;
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left == null && node.right == null) {
        node = null;
        return node;
      }
      if (node.left == null) {
        node = node.right;
        return node;
      } else if (node.right == null) {
        node = node.left;
        return node;
      }
      const aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.data, aux.data);
      return node;
    }
  }
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }
  getRootNode() {
    return this.root;
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
  tree.remove(2);
  const root = tree.getRootNode();
  console.log("inorder");
  tree.inorder(root);
  console.log("preorder");
  tree.preorder(root);
  console.log("postorder");
  tree.postorder(root);

  return <h1>Tree</h1>;
};
