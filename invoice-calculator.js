"use strict";

//test 1

const hours = 10;
const ratePerHour = 5000;

console.log("Hours:" + hours);
console.log("Rate:" + ratePerHour.toFixed(2));

const subTotal = hours * ratePerHour;
console.log("Subtotal:" + subTotal.toFixed(2));

const discount = subTotal * 10 / 100;
console.log("Discount:" + discount.toFixed(2));

const afterDiscount = subTotal - discount;
console.log("AfterDiscount:" + afterDiscount.toFixed(2));

const vat = afterDiscount * 7.5 / 100; // calculations for the vat comes after the afterDiscount has been given a value
console.log("Vat:" + vat.toFixed(2));  

const total = afterDiscount + vat; // the total output coems after all variables values have been defined
console.log("Total:" + total.toFixed(2));






