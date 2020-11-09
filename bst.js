class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right; 
                }
            } 
        }
    }

    lookup(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                return currentNode;
            }
        }
        return false;
    }

    // Searching Algorithms
    bfs() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);
        while (queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }

    dfsPreOrder() {
        var list = [];
        var current = this.root;
        function traverse(node) {
            list.push(node.value);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(current);
        return list;
    }

    dfsInOrder() {
        var list = [];
        var current = this.root;
        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            list.push(node.value);
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(current);
        return list;
    }

    dfsPostOrder() {
        var list = [];
        var current = this.root;
        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            list.push(node.value);
        }
        traverse(current);
        return list;
    }
}

const myBST = new BST();
myBST.insert(10);
myBST.insert(5);
myBST.insert(30);
myBST.insert(2);
myBST.insert(16);
myBST.insert(78);
myBST.insert(9);

//console.log(myBST.lookup(5));
//console.log(myBST);
//console.log(myBST.bfs());
console.log(myBST.dfsPreOrder());
console.log(myBST.dfsInOrder());
console.log(myBST.dfsPostOrder());