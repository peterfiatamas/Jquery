/*$('document').ready(function () {
 $('input').each(function (i, elem) {
 alert($(elem).val());
 });
 });*/
/*$('document').ready(function(){
 $('input').css('color', 'red');
 });*/
$('document').ready(function(){
    $('input').each(function(i, elem){/*Az elem mit takar? Ez az inputok i++?*/
        alert($(elem).val());/*Miért nem lehet aposztróf az elem-nél?*/
    });
});