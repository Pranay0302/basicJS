const queues = require('./queues')

let q = new queues();

q.enqueue("hello");
q.enqueue("bye");
q.dequeue();
console.log(q.peek()); // bye
console.log(q.length()); // 1