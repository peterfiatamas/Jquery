/*$('document').ready(function(){
 tr=$("tr");
 alert(tr.length);
 });*/
/*$(document).ready(function () {
 td = $(".alma, .kiwi ");
 alert(td.length);
 });*/
/*$("document").ready(function(){
 td=$(".alma, .kiwi, td");
 alert(td.length);
 });*/
/*$(document).ready(function(){
 td=$(".alma td:first");
 (td.text('eeeee'));
 });*/
/*$(document).ready(function(){
 td=$(".alma td:first");
 alert(td.text());
 
 });*/
/*$(document).ready(function(){
 $("tbody.tartalom > tr:even ").css("background", "yellow");
 $("tbody.tartalom > tr:odd ").css("background", "orange");
 $("tbody.tartalom > tr:odd ").css( "color", "white");
 alert('Supi');
 });*/
$(document).ready(function () {
    $("tbody.tartalom > tr:even ").css("background", "yellow");
    $("tbody.tartalom > tr:odd ").css("background", "orange");
    $("tbody.tartalom > tr:odd ").css("color", "white");
    $('#gomb').click(function () {
        alert('Supi');
    });
});
