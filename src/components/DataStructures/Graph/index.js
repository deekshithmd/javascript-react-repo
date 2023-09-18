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

    dfs(startingNode) {
        let visited = {};
        this.dfsUtil(startingNode, visited);
    }
    dfsUtil(vertex, visited) {
        visited[vertex] = true;
        console.log(vertex)
        const neighbours = this.adjList.get(vertex);

        for (let i in neighbours) {

            let element = neighbours[i];
            if (!visited[element]) {
                this.dfsUtil(element, visited);
            }
        }
    }
    bfs(startingNode){
        
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

    console.log("Print graph")
    graph.printGraph()
    console.log('DFS')
    graph.dfs('A')

    return <h1>Graph</h1>
}