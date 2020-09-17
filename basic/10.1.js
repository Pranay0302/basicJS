/* closure (continuation)

   closures are important */

var name = "will";

var greeting = function hello() {
    console.log(`hello, ${name}.`)
}

name = "felix";

greeting(); // hello, felix.