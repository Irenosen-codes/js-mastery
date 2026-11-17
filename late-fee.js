"use strict";

function lateFee(days){
    if(days <= 0){
        return 0;
    }

    else if (days > 5){
        return 3000;
    }

    else{
        return days * 500;
    }
}

console.log(lateFee(0));
console.log(lateFee(3));
console.log(lateFee(8));





//part 2
 let total = 0;


for (let i = 0; i <= 7; i++) {
  console.log("Day " + i + ": ₦" + lateFee(i).toFixed(2));
  total += lateFee(i);
}
console.log("Total: " + "₦" + total.toFixed(2));


const typed = "4";

console.log("Typed " + Number(typed) + " days: ₦" + lateFee(Number(typed)).toFixed(2));