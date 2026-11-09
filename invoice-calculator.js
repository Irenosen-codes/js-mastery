"use strict";

//test 3

const hours = 10;
const ratePerHour = 5000;

console.log(hours);
console.log(ratePerHour.toFixed(2));

const subTotal = hours * ratePerHour;
console.log(subTotal.toFixed(2));

const discount = subTotal * 10 / 100;
console.log(discount.toFixed(2));

const afterDiscount = subTotal - discount;
console.log(afterDiscount.toFixed(2));

const vat = afterDiscount * 7.5 / 100; // calculations for the vat comes after the afterDiscount has been given a value
console.log(vat.toFixed(2));  

const total = afterDiscount + vat; // the total output coems after all variables values have been defined
console.log(total.toFixed(2));






