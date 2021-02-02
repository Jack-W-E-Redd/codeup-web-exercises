// $(document).ready(function() {
//     alert("Dom is ready to go!")
// })
"use strict";


$(document).ready(function(){
    $('li').css('font-size', '20px');
    $('h1, p, li').css("background", "green")
    let headingAlert = $('h1').html();
    alert(headingAlert);
});
