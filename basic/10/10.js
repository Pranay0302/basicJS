// closure

// setTimeout (time in milliseconds)

function ask(question) {
    setTimeout(function wait() {
        console.log(question);
    }, 2000);
};
ask("Where are you living?");