class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.head.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = new Node(value);
        let leader = this.traverseToIndex(index - 1);
        const holder = leader.next;
        leader.next = newNode;
        newNode.next = holder;
        this.length++;
        return this;
    }

    remove(index) {
        const leader = this.traverseToIndex(index - 1);
        const holder = leader.next;
        leader.next = holder.next;
        this.length--;
        return this;
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        let next = null;
        while (curr !== null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.tail = this.head
        this.head = prev;
        return this;
    }

    // helper function(s)
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

const myLinkedList = new LinkedList(5);

myLinkedList.append(10);
myLinkedList.prepend(8);
myLinkedList.insert(1, 32);
//  8 - 32 - 5 - 10 - null
myLinkedList.reverse();    
// 10 - 5 - 32 - 8 - null
console.log(myLinkedList);