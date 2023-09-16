import React from "react";

class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.adjList = new Map();
    }

    addVertex(v) {
        this.adjList.set(v, [])
    }

    addEdge(v, w) {
        this.adjList.get(v).push(w);

        this.adjList.get(w).push(v)
    }
    printGraph() {
        let keys = this.adjList.keys();
        for (let i of keys) {
            const values = this.adjList.get(i);
            let result = '';
            for (let j of values) {
                result += j + ' '
            }
            console.log(i + ' -> ' + result)
        }
    }
}

export const GraphComponent = () => {
    const graph = new Graph();
    const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
    for (let i = 0; i < vertices?.length; i++) {
        graph.addVertex(vertices[i])
    }
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'D');
    graph.addEdge('A', 'E');
    graph.addEdge('B', 'C');
    graph.addEdge('D', 'E');
    graph.addEdge('E', 'F');
    graph.addEdge('E', 'C');
    graph.addEdge('C', 'F');

    graph.printGraph()

    return <h1>Graph</h1>
}