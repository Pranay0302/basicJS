// displaying unintialized index

var a = ["1", "2", "3"];
delete a[1];
console.log(a); // <1 empty item>
console.log(a.length); // the length will be 3 only