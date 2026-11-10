"use strict";

// goal: RICE BAG x3 = 7500.00


const item = "  garri  ";
const quantity = 2;
const unitPrice = 1250.5;

const newItem = item.trim().toUpperCase();
//console.log(newItem);
const newQuantity = "x" + quantity;
//console.log(newQuantity);
const totalUnitPrice = unitPrice * quantity;
const totalDecimal =totalUnitPrice.toFixed(2);
//console.log(totalDecimal);

console.log(`${newItem} ${newQuantity} = ${totalDecimal} `);
/*method use is called string interpolation. with the use of backtick `, 
 in place of double quote. which allows inserting a variable into this 
 ${ } (template literal)
   */




