$(document).ready(function () {
    /*alert($("#tablazat").find(".alma").length);*/
    /*alert($("#masodik td").last().text());*/
    /*alert($("#valami").parent().attr("id"));*/
   /* alert($("#masodik").children().length);*/
    /*alert($("#masodik").has("div").length);*/
    /*alert($("#masodik td").last().prev().text());*/
    /*$("td").filter("tr#elso td").css("border", "1px solid red");*/
    /*alert($("div").html());*/
    /*$("div").text("wer iujnm de");*/
    /*alert($("#masodik td").eq(1).text());*//*Elem kiválasztása sorszám alapján(a sorszám 0-tól indul)*/
    $("tr#masodik").attr('class', 'banan');
    alert($("tr#masodik").attr('class'));
});