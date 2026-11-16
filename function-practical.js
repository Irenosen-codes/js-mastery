"use strict";


//part 1
// Converts seconds into a readable HH:MM:SS timecode and rejects negative durations.

function secondsToTimecode(totalSeconds){
    if (totalSeconds < 0){
        return "Invalid time";
    }

let hours = Math.floor(totalSeconds / 3600);
let minutes = Math.floor((totalSeconds % 3600) / 60);
let seconds = Math.floor(totalSeconds % 60);

let time = 
String(hours).padStart(2 , "0") + ":" +
String(minutes).padStart(2 , "0") + ":" +
String(seconds).padStart(2 , "0");

return time;
}

console.log(secondsToTimecode(3725));
console.log(secondsToTimecode(0));
console.log(secondsToTimecode(-5));


// part 2 
/* Converts video frames into 
seconds using the frame rate and prevents invalid calculations when FPS is zero or negative. */


function framesToSeconds(frames, fps = 24){
 if(fps <= 0){
    return "Invalid fps";
 }

 return frames / fps;
}

console.log(framesToSeconds(48));
console.log(framesToSeconds(90, 30));
console.log(framesToSeconds(10, 0));


//part 3 

// Formats valid amounts as Naira with two decimal places while rejecting negative values.

function formatNaira(amount){
   if(amount < 0){
    return "Invalid amount"
   }

   return "₦" + (amount).toFixed(2);

}

console.log(formatNaira(1500));
console.log(formatNaira(0));
console.log(formatNaira(-100));