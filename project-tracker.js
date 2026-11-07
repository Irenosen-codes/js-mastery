"use strict";

const projectName = "Sandra";
const CURRENCY_SYMBOL = "₦";
const rate = 500000;
let hours = 4;
const deliveryDate = "2026-11-20";
let isPaid = false;

console.log("Before:", projectName, "₦", rate, hours, deliveryDate, isPaid);

hours = 8;
isPaid = true;

console.log("After:", projectName, rate, hours, deliveryDate, isPaid);

