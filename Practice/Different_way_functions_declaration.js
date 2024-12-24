function add(a,b) { // we are not declared the type of parameter in javascript, because the Javascript is dynamically typed language.
    console.log(a + b);
}
add (100, 200); 

// function expression

const sub = function(a,b) {
    console.log(a-b);
}
console.log(sub(100,50)); // it will be undefined as it was returning nothing.

//Arrow Function or call back function 
const mul = (a , b) => {
    console.log(a * b);
}
mul(5 , 4);

// Different way using arrow function or callback function

// 1
const mul_way1 = (a, b) => a * b;
console.log(mul_way1(10,20));

//2 
const mul_way2 = (a,b) => { return a * b }
console.log(mul_way2(8 , 9));

//3 
const mul_way3 = (a , b) => {
   return a * b;
}
console.log(mul_way3(10,9));