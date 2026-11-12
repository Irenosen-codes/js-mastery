"use strict";


console.log(Number("  12  ")); // prediction: 12

console.log(Number("12px")); // prediction: NaN

console.log(Number(undefined)); // prediction: NaN

console.log(Number(false) + Number(null)); // prediction: NaN

console.log(Boolean(" ")); // prediction: true

console.log(Boolean(0n)); // prediction: false 

console.log(Boolean("undefined")); // prediction: true

console.log("1" == true); // prediction: false

console.log("" == false); // prediction: true

console.log(null == false); // prediction: false

console.log(null === undefined); // prediction:false

console.log(null >= 0); // prediction:true

console.log("Zebra" < "apple"); // prediction:true

console.log("15" > 9); // prediction: true

console.log(undefined >= 0); // prediction:false