"use strict";


console.log(Number("  12  ")); // prediction: 12

console.log(Number("12px")); // prediction: NaN

console.log(Number(undefined)); // prediction: NaN

console.log(Number(false) + Number(null)); // prediction: NaN 
/* this blew me off because Number(false) results into NaN AND thats saying 
NaN + NaN  PRINTS 0? seems a bit wrong to me */

console.log(Boolean(" ")); // prediction: true

console.log(Boolean(0n)); // prediction: false 

console.log(Boolean("undefined")); // prediction: true

console.log("1" == true); // prediction: false
/* re reading this i see where i made the mistake 1 is a string but true isnt a string they dont
both have the same DATA TYPE, so how?*/

console.log("" == false); // prediction: true

console.log(null == false); // prediction: false

console.log(null === undefined); // prediction:false

console.log(null >= 0); // prediction:true

console.log("Zebra" < "apple"); // prediction:true

console.log("15" > 9); // prediction: true

console.log(undefined >= 0); // prediction:false

// i was told to give 3 line but how ever i failed two line so ill just give a why for two lines