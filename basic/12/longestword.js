// finding the longest word

var string = "and it's getting cold, it will be alright";

var newstring = string.split(" ").sort((stringA, stringB) => {
    return stringB.length - stringA.length;
});
console.log(`the longest word is: ${newstring[0]}`);