class Node {
    constructor(val) {
        this.value = val
        this.next = null;
    }
}

class SSL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //Big O(1)
    add(value) {
        let node = new Node(value);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    //Big O (n)
    remove(value) {
        if (!this.length) return null;
        let previous = null;
        let current = this.head;
        while (current) {
            if (current.value === value) {
                if (current === this.head) {
                    this.head = this.head.next;
                }
                if (current === this.tail) {
                    this.tail = previous;
                }
                previous.next = current.next;
                this.length--;
            } else {
                previous = current;
            }
            current = current.next;
        }
    }

    //Big O(n)
    reverse(){
        if(!this.head) return null
        if(this.length === 1) return this.head

        let prev = null;
        let next = null;
        let curr = this.head;
        this.tail = curr;
        while(curr != null){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.head = prev;
    }
}

module.exports = SSL;