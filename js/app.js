'use strict';

var C = 0;
var F = 0;
console.log(F);
var startbound = 32;
var endbound = 100;
var increment = 1;
var htmlout = "";

$(document).ready(function () {

    function getC(F) {
        return (F - 32) * 5/9;
    }

    $('#submitButton').click(function () {

        startbound = parseFloat($('#start').val());
        endbound = parseFloat($('#end').val());
        increment = parseFloat($('#inc').val());


        F = startbound;
        htmlout = '<table class="table table-striped">';
        htmlout = htmlout + "<thead><tr><th>Celsius</th><th>Fahrenheit</th></tr></thead>";

        do
        {
            htmlout = htmlout + "<tr>";
            C = getC(F);
            htmlout = htmlout + "<td>" + Math.round(C.toString() * 100) / 100 + "</td>";
            htmlout = htmlout + "<td>" + F.toString() + "</td>";

            console.log(C, F);
            F = F + increment;
            htmlout = htmlout + "</tr>";


        } while (F < endbound)

        htmlout = htmlout + "</table>";

        $('#details').html(htmlout);

    });
    

});