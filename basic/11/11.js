// this keyword

// 1st example
var house = {
    furniture: "sofa",
    user: "Aaron",
    ask(question) {
        console.log(`Hey! ${this.user},`, question, `i'm talking about the`, this.furniture);
    },
};

house.ask("is it from ikea?");

// 2nd example (explicit)

function kodaline(song) {
    console.log(this.si, song);
}

function compliment() {
    var yes = {
        si: "All i want",
    }
    kodaline.call(yes, "nice song eh.");
}

compliment();