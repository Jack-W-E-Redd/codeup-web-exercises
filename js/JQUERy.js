"use strict";


(function() {
    // variable name can be anything other than a reserve better if its simialr to the ID
    let mainTitle = $('#main-title')

    mainTitle.click(function(event) {

       $(this).text("NEW TEXT!!");
       $('#override-bootstrap').css("background-color", "blue");

    });

    console.log(mainTitle);

    let cardChange = $('.card');

    cardChange.hover(
        function() {
            $(this).css("background-color", "lightblue");


    },
        function() {
            $(this).css("background-color", "");
        })

    console.log(cardChange);



    let tableRow = $("<tr></tr>");
    for(let i = 1; i <= 4; i++) {
        let tableData = $("<td></td>").text("Table row made");
        console.log(tableData);
        tableRow.append(tableData);
    }
    $("tbody").append(tableRow);

console.log(tableRow);

})()