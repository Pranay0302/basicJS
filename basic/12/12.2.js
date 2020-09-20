// finding whether the given strings are anagrams of each other

var one = "float";
var two = "tofal";

function isAnagram(first, second) {
    var first = one.toLowerCase().split("").sort().join("");
    var second = two.toLowerCase().split("").sort().join("");
    if (first === second) {
        console.log("they are anagrams")
    } else {
        console.log("they're not anagrams")
    }
}


isAnagram(one, two); // they are anagrams