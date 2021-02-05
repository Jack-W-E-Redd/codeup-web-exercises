"use strict";

// $(document).ready(function(){



$(document).click(function(e){
        e.preventDefault();
        $('.invisible').toggleClass();
        $('dt').toggleClass('highlighted');

    })
    $('.button-background').click(function (e){
        e.preventDefault();
        $('ul li:last-child').css('background', 'yellow');
    });
    $('h3').click(function (e){
        e.preventDefault();
        $('ul').children().css('font-weight', 'bold');
    });
    $('li').click(function (e){
        e.preventDefault();
        $('li').filter(':nth-child(1)').css('color', 'blue');
    });