"use strict";

/* Make every file name clean: 
 no edge spaces, all lowercase, 
 hyphens instead of spaces.
*/


//method order: speaces trimed out, before changing to lower case then replacing spaces for -, all represented below


let final = " My Video FINAL v2.MP4 ";
console.log(final.trim().toLowerCase().replaceAll(' ', '-'));


let lagos =	"Wedding Highlight Lagos.MOV";
console.log(lagos.trim().toLowerCase().replaceAll(' ', '-'));


let client = " Client Promo 30s.mp4";
console.log(client.trim().toLowerCase().replaceAll(' ', '-'));


let interview = "BTS Interview Take 3.WAV   ";
console.log(interview.trim().toLowerCase().replaceAll(' ', '-'));


let logo = "Logo Reveal.Aep";
console.log(logo.trim().toLowerCase().replaceAll(' ', '-'));




