class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/* --- With Linked List --- */

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holder = this.top;
            this.top = newNode;
            this.top.next = holder;
        }
        this.length++;
        return this;
    } 

    pop() {
        if (this.length === 1) {
            this.bottom = null;
        }
        if (!this.top) {
            return null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
    }
}

const myStack = new Stack();
myStack.push(5);
myStack.push(12);
myStack.push(20);
myStack.pop();

console.log(myStack.peek());
console.log(myStack);




/* --- With Arrays --- */

class StackWithArrays {
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    push(value) {
        this.array.push(value);
        return this;
    }

    pop() {
        this.array.pop();
        return this.array;
    }
}   

const arrStack = new StackWithArrays();
arrStack.push(10);
arrStack.push(8);
arrStack.push(16);
arrStack.pop();

console.log(arrStack.peek());
console.log(arrStack);