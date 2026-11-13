"use strict";

let jobType = "voiceover"; // subtitle , translation, voiceover, otherjob
let resolution = "1080p"; // 4k, 1080p
let rate;
let rush;
let minutes = 20;
let reason = jobType;



/*
1. If job type is subtitles, then rate is 1000
2. If job type is translation, then rate is 2500
3. If job type is voiceover, then rate is 4000
4. If job type is none of the above, then rate is 1000
5. Price starts at rate × minutes
6. If minutes are 15 or more, then take 10% off
7. If resolution is "4k", then add 1000
8. If rush isn't given, then treat it as not rush
9. If rush, then add 5000
10. If rush and 15 minutes or more, then show a warning
11. Show the price and the reasons
*/

switch (jobType){
    case "subtitles":
        rate = 1000;
        break;
    
    case "translation":
        rate = 2500;
        break;

    case "voiceover":
        rate = 4000;
        break;
        
    default:
        rate = 1000;
        break;
}

let price = rate * minutes;

if (minutes >= 15){
    price = price - price * 10/100;
    reason += ", 10% off";
}

if (resolution === "4k"){
    price +=1000;
    reason += ", 4K";
}

rush = rush ?? false;

if (rush){
    price += 5000;
    reason += ", rush delivery";
    
}

if (rush && minutes >= 15){
    console.log("warning")
}

console.log(`Price: ${price}`); 
console.log(`Reason: ${reason}`);
/*
The price depends on the type of job and the number of minutes. 
15 minutes or more gets 10% off. 
4K adds 1,000, and rush delivery adds 5,000.
*/