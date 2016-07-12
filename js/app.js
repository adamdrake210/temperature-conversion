'use strict';

var C = 0;
var F = 0;
var startbound = 32;
var endbound = 100;
var increment = 3;

$(document).ready(function () {

    function getC(F) {
        return (F - 32) * 5/9;
    }

    $('#submitButton').click(function () {

        F = startbound;
        do
        {
            C = getC(F);
            console.log(C, F);
            
            F = F + increment;
        } while (F < endbound)


        $('#details').html(C);

    });
    

});