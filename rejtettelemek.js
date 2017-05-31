/*$(document).ready(function () {
 $('button').click(function () {
 $('div').css("visibility", "visible");
 $('button').click(function () {
 $('div').css("visibility", "hidden");
 });
 });
 });*/

/*$(document).ready(function () {
 $("button").click(function () {
 $("div").hide("drop", {direction: "down"}, "slow");
 });
 });*/
/*$(document).ready(function () {
 $("button").click(function () {
 $("div").show("fold", 1000);
 });
 });*/

/*$(document).ready(function () {
 $("button").click(function () {
 $("div").show("slow", function () {
 });
 });
 });*/
/*$(document).ready(function () {
 inputok = $('input')
 for (i = 0; i < inputok.length; i++)
 {
 alert(inputok[i].value);
 }
 });*/
/*$(document).ready(function () {
    $('#gomb').click(function () {
        inputok = $('input')
        for (i = 0; i < inputok.length; i++)
        {
            alert($(inputok[i]).val());
        }
    });
});*/
$(document).ready(function(){
    $('input').each(function(i, elem){
        alert($(elem).val());
    });
});