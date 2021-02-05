// $(document).ready(function() {
//     alert("Dom is ready to go!")
// })

'use strict'

$(document).ready(function (){


    $("h1").click(function(){
        $(this).css("background-color", "green");
    });

    $("p").dblclick(function(){
        $(this).css("font-size", "18px");
    })

    $("li").hover(
        function () {
            $(this).css("color","purple");
            },
        function () {
            $(this).css("color","black");
        }
    );
});
