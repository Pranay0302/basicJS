// queues

function queues() {
    this.data = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.peek = peek;
    this.length = length;
}

function enqueue(value) {
    return this.data.push(value);
}

function dequeue() {
    return this.data.shift();
}

function peek() {
    return this.data[0];
}

function length() {
    return this.data.length;
}

module.exports = queues;