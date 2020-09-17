// if else

// 1st example

var stock = 0;


if (stock == 0) {
    add(stock);
} else {
    nope(stock);
}

function add(stock) {
    console.log(`the current stock is ${stock}, lesgo buy some stuffs`);
}

function nope(stock) {
    console.log(`the current stock is ${stock}, no need to buy`);
}


// 2nd example 

var isEnrolled = false;

if (isEnrolled) {
    console.log("attend the classes");
} else {
    console.log("please enroll first");
}