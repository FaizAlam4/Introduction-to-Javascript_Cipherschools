console.log("JS is awesome!")

let u=56; //ES5
let v=89;  //ES6 ~ Ecmascript 2015
const PI=3.14; //ES6


console.log(u);
console.log(v);
console.log(PI);


let a=10; //number
let b='10' //string
let c=a+b;

console.log(c); //prints 1010 , converts number to string internally and concatenate
console.log(typeof(c)); 

let d=a-b;  //prints 0, mathematical operation!
console.log(d);
console.log(typeof(d));

console.log(c/'5'); //gives 202
console.log(c/'five'); //gives NaN (not a number)
let e=c/'five';
console.log(typeof(e))  //return number : The typeof operator in JavaScript is designed to return a string indicating the type of the operand. When applied to a NaN value, typeof NaN will return "number" because internally NaN is considered a numeric value with a special meaning.