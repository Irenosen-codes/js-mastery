"use strict";

let names = ["ada", "tunde", "bisi", "emeka", "zara", "femi", "ngozi", "kemi", "obi", "sade"];
let emails = ["ada@mail.com", "tunde@mail.com", "bisi@mail.com", "emeka@mail.com", "zara@mail.com", "femi@mail.com", "ngozi@mail.com", "kemi@mail.com", "obi@mail.com", "sade@mail.com"];
let balances = [0, 15000, 0, 8000, 0, 0, 22000, 0, 5000, 0];
let daysLate = [0, 12, 0, 45, 0, 0, 3, 0, 0, 0];


console.log("--- Clients ---")
let loudNames = names.map((name) => name.toUpperCase()); // use map because it creates a new list with every name in uppercase

loudNames.forEach((name, index) => { // use forEach because I want to print every name with its number
    console.log(`${index + 1}. ${name}`);
});


console.log("--- Unpaid ---")

let unpaid = balances.filter((balance)=> balance > 0); /*use filter because it creates a 
 new list while leaving the orginal untouched */
console.log(unpaid);

console.log("Unpaid clients: " + unpaid.length);


console.log("--- Find by email ---")

function findByEmail(email){
      let index = emails.indexOf(email);// use indexOf because I need the position of the email in the list

    if(!emails.includes(email)){ // use includes because I need to check if the email exists in the list
        console.log("No client with " + email);
    }

    else{
        console.log(`${email} belongs to ${loudNames[index]}`);

    }
} 

findByEmail("emeka@mail.com");
findByEmail("john@mail.com");


console.log("--- Overdue ---")

let anyLate = daysLate.some((client) => client > 30 ); // use some because I want to know if at least one client is over 30 days late

console.log("Any client over 30 days late: " + anyLate);


let allPaid = balances.every((paid)=> paid===0); // use every because I want to check if all clients have paid
console.log("Every client paid: " + allPaid);

