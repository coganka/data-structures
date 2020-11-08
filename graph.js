class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    addEdge(node1, node2) {
        // undirected
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');

myGraph.addEdge('3', '1'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '0'); 
myGraph.addEdge('0', '2'); 

// // 0 --> 1 2 
// // 1 --> 0 2 3
// // 2 --> 0 1 
// // 3 --> 1  
