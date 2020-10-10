var array = ['re', 'ze', 'ge'];
array.splice(0, array.length);
/* 

alternate method

while(array.length){
    array.pop();
}


*/
console.log(array); // []