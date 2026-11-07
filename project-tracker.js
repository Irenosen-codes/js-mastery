"use strict";

//  the name of the client project remain fixed, with no plan for reassignment

const projectName = "Sandra";

// the currency to be used throughout the client project would be the naira

const CURRENCY_SYMBOL = "₦";

// the rate is a fixed payment play with no reassigned value 

const rate = 500000;

// the hours data would be reassigned later in this project in line 29

let hours = 4;

// the delivery date is a constant amd won't be changed

const deliveryDate = "2026-11-20";

//the paid status changes once client pays for the rate provided, reassigned in line 30

let isPaid = false;

console.log("Before:");
console.log("Project:", projectName);
console.log("Rate:", CURRENCY_SYMBOL + rate);
console.log("Hour:", hours);
console.log("Deadline:", deliveryDate);
console.log("Paid:", isPaid);


hours = 8;
isPaid = true;

console.log("After:");
console.log("Project:", projectName);
console.log("Rate:", CURRENCY_SYMBOL + rate);
console.log("Hour:", hours);
console.log("Deadline:", deliveryDate);
console.log("Paid:", isPaid);

