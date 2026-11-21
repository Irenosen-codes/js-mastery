"use strict";

let queue = ["logo", "flyer", "banner"]; /* Why: Because we need a central list
 to store all the jobs waiting to be processed. 
 Every function works with this same list.*/


function printQueue(){  /* Why: Because we need a way to see what 
    jobs are currently in the queue and how many jobs are waiting.*/

    if (queue.length <= 0){
        console.log("Queue is empty");
    }
    else{
        console.log("Queue (" + queue.length + "):");

    for (let queues of queue){
        console.log("- " + queues);
    }
    }
   

}




function addJob(job){  /* Why: Because we need a way to add new 
    jobs to the end of the queue without
    manually changing the array every time.*/
  
  queue.push(job); // changes the queue
  console.log("Added: " + job);
  printQueue();
  
}


function startNext(){

    if(queue.length <= 0){
      console.log("Nothing to start");
    }
    else{
         let job = queue.shift(); // changes the queue
    console.log("Started: " + job);
    }
    
    printQueue();
}


function cancelJob(job){
    let index = queue.indexOf(job);

    if(index === -1){
        console.log("Not found: " + job);
    }
    else{
    queue.splice(index, 1); // changes the queue
    console.log("Cancelled: " + job);

    }

    printQueue();

}

printQueue();
addJob("poster");
startNext();
cancelJob("banner");
cancelJob("menu");
startNext();
startNext();
startNext();