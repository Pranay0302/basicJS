// this (continuation)
// class


class coffee {

    constructor(type) {
        this.type = type;
    }
    compliment(compliment) {
        console.log(this.type, compliment)
    }
}

// function coffee(type) {
//     this.type = type;
// }

// coffee.prototype.compliment = function(compliment) {
//     console.log(this.type, compliment)
// }

var one = new coffee("Black coffee");
var two = new coffee("Espresso");

one.compliment("is nice.");
two.compliment("is nice");