"use strict";

/* Why: To check numbers from 1 to 30 and print Fizz, Buzz, 
FizzBuzz, or the number itself based on divisibility by 3 and 5. */

for(let n =1; n <= 30; n++){
   
    if(n % 3 === 0 && n % 5 === 0){
    console.log("FizzBuzz");
    continue;
   }
   
   
    if(n % 3 ===0){
    console.log("Fizz");
    continue;
   }

     if(n % 5 ===0){
    console.log("Buzz");
    continue;
   }

console.log(n);

}

for (let row = 1; row <= 5; row++) { /*Why: To create a 5 × 5 multiplication grid by using nested loops,
 multiplying each row number by each column number.*/

    let line = "";

    for (let column = 1; column <= 5; column++) {

        line += (row * column) + " ";

    }

    console.log(line);
}




let timePerSecond = 60;


for (let seconds = 0; seconds <= 60; seconds += 5) { // Loop from 0 to 60, increasing by 5 seconds each time.

    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    let formattedSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

    console.log("00:" + formattedMinutes + ":" + formattedSeconds);

}