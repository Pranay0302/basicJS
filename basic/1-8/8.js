//coercion

/*

   -> == allows coercion (better if we know both the types)
   
   -> === disallows coercion

*/


var a = 15;
var b = "hello";


// comparison will be done numerically only, since one of them is a number.
if (a < b) {
    console.log("lol");
} else {
    console.log("yep");
}