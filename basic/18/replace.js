var x = 'somebody that i used to know'
var y = x.replace(/[a,e,i,o,u]/g, '@');
console.log(y);


var a = 'hel2093u90u52hoisf';
var b = a.replace(/\d/g, 'N');
console.log(b);


var simple = 'lets play ping pong pizza pope pop';
var yes = simple.replace(/p+(i|o){1,}/g, '*');
console.log(yes);

var h = 'hey sup!?';
var j = h.replace(/^hey/, 'Hey');
console.log(j);

var k = 'there for you';
var l = k.replace(/you$/g, 'YOU');
console.log(l);

var c = 'loalkjnfrem ipsihfowsum is 9302u e20_30';
var d = c.replace(/\w/g, 'm');
console.log(d);