"use strict";

console.log("1:", typeof 75000); // predited : right

console.log("2:", typeof "75000"); // predited : right

console.log("3:", typeof false); // predited : right

console.log("4:", typeof null); // predited : right

console.log("5:", typeof undefined); // predited : right

console.log("6:", typeof 500n); // predited : right

console.log("7:", typeof Symbol("invoice")); // predited : right

console.log("8:", typeof { client: "Ada", hours: 3 }); // predited : right

console.log("9:", typeof NaN); // predited : right

console.log("10:", typeof "false"); // predited : right

console.log("11:", typeof ""); // predited : wrong 

let deliveryDate;
console.log("12:", typeof deliveryDate); // predited : right