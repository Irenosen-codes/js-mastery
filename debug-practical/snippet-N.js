"use strict";


//snippet 1;
 //Error: type error
 // Cause: tofixed used as a function

let price = 2499.5;
console.log("₦" + (price).toFixed(2)); 


//snippet 2

 //Error: syntax error
 // Cause: missing arguement )

 function rushFee(isRush) {
  if (isRush) {
    return 5000;
  }
  return 0;
}
console.log(rushFee(true));
console.log(rushFee(false));


//snippet 3

 //Error: ReferenceError
 // Cause: Label is not defined

 function makeLabel(clip) {
  let label = "Clip " + clip;
  console.log(label);
  return label;
  
}
makeLabel(4);


//snippet 4

 //Error: no error bug
 // Cause: incorrect accumulation and an incorrect multiplier.
 
let total = 0;
for (let i = 1; i <= 3; i++) {
 
  total += i * 1000;
}
console.log(total);


//snippet 5

 //Error: typeerror
 // Cause: Cannot read properties of undefined (reading 'toUpperCase')


function getExtension(fileName) {
  let dot = fileName.indexOf(".");
  let ext = fileName.slice(dot);
  return ext;
}
let result = getExtension("intro.mp4");
console.log(result.toUpperCase());


//snippet 6

 //Error: ReferenceError 
 // Cause: spelling error "true" is the right data type not True
 
let paid = true;
if (paid) {
  console.log("Send the file");
} else {
  console.log("Wait for payment");
}


//snippet 7

 //Error: no bug error
 // Cause: the order of the conditions were wrong

function grade(score) {
  if (score >= 90) {
    return "Distinction";
  } else if (score >= 50) {
    return "Pass";
  } else {
    return "Repeat";
  }
}
console.log(grade(95));
console.log(grade(60));
console.log(grade(30));


//snippet 8

 //Error: TypeErroe
 // Cause: assignment to const variable can not be done.


let count = 0;
for (let i = 0; i < 3; i++) {
  count++;
}
console.log(count);