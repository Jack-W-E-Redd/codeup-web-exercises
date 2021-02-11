"use strict";


(function() {
    // variable name can be anything other than a reserve better if its simialr to the ID
    let mainTitle = $('#main-title')

    mainTitle.click(function(event) {

       $(this).text("NEW TEXT!!");
       $('#override-bootstrap').css("background-color", "blue");

    });
//
    console.log(mainTitle);

//     let cardChange = $('.card');
//
//     cardChange.hover(
//         function() {
//             $(this).css("background-color", "lightblue");
//
//
//     },
//         function() {
//             $(this).css("background-color", "");
//         })
//
//     console.log(cardChange);
//
//
//
//     let tableRow = $("<tr></tr>");
//     for(let i = 1; i <= 4; i++) {
//         let tableData = $("<td></td>").text("Table row made");
//         console.log(tableData);
//         tableRow.append(tableData);
//     }
//     $("tbody").append(tableRow);
//
// console.log(tableRow);


// $('.list-group>li').dblclick(function() {
//     $(this).text("You Just Got Clicked!");
//     $(this).click(function() {
//         $(this).text("ahhhhh....better");
//     })
// });
// get the data
// bundle the data (maybe)
// crete the elements that match the html
// inject the data into the elements
// add the elements to the DOM




// function getInputData() {
//     let first = $("#first").val();
//     let last = $("#last").val();
//     let handleField = $("#handleField").val();
//
//
//     return {
//         first, last, handleField
//     }
//
// }
//
// $("#submitBtn").click(function(){
//     console.log(getInputData());
// });

    let hoverIn = function () {
        $(this).css({
            backgroundColor: "black",
            color: "white"
        });
    };

    let hoverOut = function () {
        $(this).css({
            backgroundColor: "",
            color: ""
        })
    }
    //hover usually takes in two parameters
    // $('.card').hover(hoverIn, hoverOut);

    //toggle class added from html with click
    // $('.card').click(function (){
    //     $(this).toggleClass("toggleClass");
    // });
    //selector is all li that are children of class "list-group"
    $(".list-group>li").dblclick(function (){
        $(this).text("I GOT DBL CLICKED!");
        $(this).click(function (){
            $(this).text("ahhhhh...better");
        })
    });

    // GET DATA

    // this function is making a new object
    // function getInputData() {
    //     let first = $("#first").val();
    //     let last = $("#last").val();
    //     let handleField = $("#handleField").val();
    //
    //     return {
    //         id: 4, first , last, handleField
    //     };
    // }
    // $("#submitBtn").click(function () {
    //     console.log(getInputData());
    //
    // let inputData = getInputData()
    //
    // // create the elements that match the html
    // //     let cellCount = $('tr').first().children().length;
    // //
    //     let tableRow = $("<tr></tr>");
    //
    //     let td1 = $("<td></td>").text(inputData.id);
    //     let td2 = $("<td></td>").text(inputData.first);
    //     let td3 = $("<td></td>").text(inputData.last);
    //     let td4 = $("<td></td>").text(inputData.handleField);
    //
    //     tableRow.append([td1, td2, td3, td4]);
    //     tableRow.appendTo($("tbody"));
    //
    //
    //
    //     // for(let i = 1; i <= cellCount; i += 1){
    //     //     let tableData = $("<td></td>");
    //     //     tableRow.append(tableData);
    //     // }
    //
    //
    // // inject data into elements
    //
    // // add elements to the DOM
    // });

    $("img").click(function (){
        $(this).attr("src", "img/codeup-arrow-copy.png");
        $(this).attr("alt", "codeup");
    })

    $("#submitBtn").click(function () {
        window.location.replace("https://justscream.baby/");
        // location.reload();
    })



})()