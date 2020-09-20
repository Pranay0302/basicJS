// stack

function stack() {

    this.data = [];
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
    this.top = 0;
}

function push(value) {
    return this.data[this.top++] = value;
}

function pop() {
    return this.data[this.top--];
}

function peek() {
    return this.data[this.top - 1];
}

function clear() {
    this.top = 0;
}

function length() {
    return this.top;
}

module.exports = stack;