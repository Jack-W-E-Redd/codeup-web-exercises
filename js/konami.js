"use strict";

// $(document).keyup(function(event){
//     console.log(event.keyCode);
// });

// Array.from(document.getElementsByTagName('input'))
//     .forEach((i) => {
//         i.addEventListener('keyup', function(e) {
//             console.log(this.value);
//             if (this.value === 'Kaine') {
//                 alert("Congrats you figured out how to use a cheat code you'll be hearing from our lawyers.");
//             }
//         });
//     })

$('h1').css('text-align', 'center');

let konami = "38, 38, 40, 40, 37, 39, 37, 39, 66, 65";
let konamikey = []

$(window).keyup(function(e) {
    console.log(e.keyCode);
    konamikey.push(e.keyCode);
    if(konamikey.toString().indexOf(konami) >= 0)
        alert("Congrats on using a cheat code in our game. Doing so has violated our terms and services therefore you will be banned from this game for 1610 days.")
});