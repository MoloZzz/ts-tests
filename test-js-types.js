const isItBigInt = 13n;
console.log(isItBigInt); // 123n
console.log(typeof isItBigInt); // bigint

const isFunc = () => {};
console.log(isFunc); // [Function: isFunc]
console.log(typeof isFunc); // function

console.log(null);
console.log(typeof null); // object - fake, really null
console.log(true); // true
console.log(typeof true); // boolean
console.log(undefined); // undefined
console.log(typeof undefined); // undefined