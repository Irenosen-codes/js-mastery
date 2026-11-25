"use strict";

let clients = ["Ada", "Tunde", "Bisi", "Emeka", "Ngozi", "Ada", "Kemi", "Tunde", "Femi", "Bisi", "Zainab", "Emeka", "Kemi", "Femi", "Ngozi"];
let fees = [12000, 8000, 15000, 5000, 20000, 9000, 7000, 30000, 4000, 11000, 6000, 10000, 13000, 3000, 12000];

console.log("=== Monthly Report ===");

let jobs = fees.length;
console.log("Jobs: " + jobs);

// WHY: I used reduce() because I need to calculate the total fees.
let total = fees.reduce((sum, tol)=> sum + tol, 0);
console.log("Total: " + total);

let average = total / jobs;
console.log("Average: " + average);

// WHY: I used reduce() because I need to find the highest fee.
let topFee = fees.reduce((biggest, fee)=> fee > biggest ? fee : biggest, fees[0]);

// WHY: I used indexOf() because I need to find the position of the highest fee.
let topIndex = fees.indexOf(topFee);

// WHY: I used array indexing because I need to find the client at that position.
let topClient = clients[topIndex];
console.log("Top client: " + topClient + " (" + topFee + ")");


// WHY: I used the spread operator because I need to copy the fees without changing the original.
let sortedFees = [...fees];

// WHY: I used sort() because I need to arrange the fees from highest to lowest.
sortedFees.sort((a, b)=> b - a);

// WHY: I used join() because I need to display the sorted fees as one line of text.
console.log("Fees, biggest first: " + sortedFees.join(", "));

// WHY: I used join() because I need to display the original fees in their job order.
console.log("Fees in job order: " + fees.join(", "));

