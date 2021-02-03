// $(document).ready(function() {
//     alert("Dom is ready to go!")
// })
<<<<<<< HEAD
"use strict";


$(document).ready(function(){
    $('li').css('font-size', '20px');
    $('h1, p, li').css("background", "green")
    let headingAlert = $('h1').html();
    alert(headingAlert);
=======

$(document).ready(function() {
    $("h1").click(function() {
        $(this).css("background-color", "green");
    });
    $("p").dblclick(function() {
        $(this).css("font-size", "18px");
    })
    $("li").hover(
        function () {
            $(this).css("color", "green");
        },
        function () {
            $(this).css("color", "black");
        }
    );
>>>>>>> Luna-JQuery
});
