const moment = require('moment')

const one = moment().format('[day]: dddd');
console.log(one);


const two = moment().format('[month]: MMMM');
console.log(two);

const three = moment().locale();
console.log(three);

const four = moment().format('LT');
console.log(four);
// const ref = four.split(" ");
// const newref = []
// const reg = (ref) => {
//     for (let i = 0; i < ref.length; i++) {
//         newref.push(ref[i], ref[i+1]).join(" ");
//     }
// }
const five = moment().calendar();
console.log(five);


const six = moment().endOf('day').fromNow();
console.log(six);

const seven = moment().add(1, 'days').calendar();
console.log(seven);