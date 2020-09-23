class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.length++;
    }

    insertLast(data) {
        let current;
        let node = new Node(data);

        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    insertIndex(data, index) {
        if (index.length > 0 && index > 0) {
            return; // index is out of range
        }
        if (index === 0) {
            this.head = this.insertFirst(data);
            return;
        }
        let curr, prev;
        let count = 0;
        const node = new Node(data);
        curr = this.head;
        while (count < index) {
            prev = curr;
            count++;
            curr = curr.next;
        }

        node.next = curr;
        prev.next = node;
        this.length++;
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    getIndex(index) {
        let curr = this.head;
        let count = 0;
        while (curr) {
            if (count == index) {
                console.log(curr.data);
            }
            count++;
            curr = curr.next;
        }
        return null;
    }

    removeIndex(index) {
        if (index.length > 0 && index > 0) {
            return; // index is out of range
        } else {
            let curr = this.head;
            let prev;
            let count = 0;

            if (index == 0) {
                this.head = curr.next;
            } else {
                while (count < index) {
                    count++;
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
            }
            this.length--;
        }
    }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);

ll.insertIndex(500, 2);
ll.removeIndex(2);

ll.printList();

ll.getIndex(3);