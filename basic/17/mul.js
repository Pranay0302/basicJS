// anonymous function

function mul(x) {
    return function(y) {
        return function(z) {
            return x * y * z;
        }
    }
}

console.log(mul(2)(2)(2));