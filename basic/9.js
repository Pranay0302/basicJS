// scoping


// IIFE stands for immediately invoked function expression

var color = "red";

(function newcolor() {
    var color = "yellow";
    console.log(color); // yellow
})();

console.log(color); // red


// normal function expression


var name = "bruce";

function newname() {
    var name = "dorothy";
    console.log(name); // dorothy
}

newname();

console.log(name); // bruce