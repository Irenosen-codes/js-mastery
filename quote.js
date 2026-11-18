"use strict";


console.log("Quote calculator ready");

function rateFor(type){
    if(type === "edit"){
        return 5000;
    } 

    else if(type === "motion"){
        return 15000;
    }

    else if(type === "color"){
        return 3000;
    }

    else{
        return 5000;
    }

}

console.log(rateFor("edit"));
console.log(rateFor("motion"));
console.log(rateFor("color"));
console.log(rateFor("other"));


function videoPrice(type, minutes, rush){
    let rate = rateFor(type);
    let price = rate * minutes;

    if (rush === "yes"){
      return price + (price * 50/100);
        
    }

    else {
        return price;

    }
        
}

console.log(videoPrice("edit", 5, "no"));
console.log(videoPrice("motion", 2, "yes"));


function vatOn(amount){
    return amount * 7.5/100;
}

function formatNaira(amount){
    return "₦" + amount.toFixed(2);
}

console.log(vatOn(70000));
console.log(formatNaira(2737.5));


let name = prompt("Client name?");
let number = Number(prompt("How many videos?"));

console.log("Quote for " + name);

// Start subtotal at 0 because no video prices have been added yet.
let subtotal = 0;

for (let video = 1; video <= number; video++) {
    let type = prompt("Video type?");
    let minutes = Number(prompt("Minutes?"));
    let rush = prompt("yes or no?");

    let price = videoPrice(type, minutes, rush);

    // Add each video's final price because subtotal must include every video.
    subtotal += price;

    console.log(
        "Video " + video + ": " +
        type + ", " +
        minutes + " min, rush: " +
        rush + " = " +
        formatNaira(price)
    );
}

// Calculate VAT because it is 7.5% of the subtotal.
let vat = vatOn(subtotal);

// Add VAT because the total includes both the subtotal and tax.
let total = subtotal + vat;

console.log("Subtotal: " + formatNaira(subtotal));
console.log("VAT (7.5%): " + formatNaira(vat));
console.log("Total: " + formatNaira(total));
