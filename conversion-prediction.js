"use strict";


console.log(Number("  12  ")); // prediction: 12

console.log(Number("12px")); // prediction: NaN

console.log(Number(undefined)); // prediction: NaN

console.log(Number(false) + Number(null)); // prediction: NaN 
/* why: rules false is 0 and null is 0 (0 
+ 0) prints 0 */

console.log(Boolean(" ")); // prediction: true
/* why: quote rule. if theres anything btw the quote then its true, the word inside dont matter */

console.log(Boolean(0n)); // prediction: false 

console.log(Boolean("undefined")); // prediction: true

console.log("1" == true); // prediction: false
/* why: == converts both to numbers then compare */

console.log("" == false); // prediction: true

console.log(null == false); // prediction: false

console.log(null === undefined); // prediction:false

console.log(null >= 0); // prediction:true

console.log("Zebra" < "Apple"); // prediction: false

console.log("15" > 9); // prediction: true

console.log(undefined >= 0); // prediction:false

