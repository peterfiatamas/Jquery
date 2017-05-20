/*$('document').ready(function () {
 $('#gomb').click(function () {
 alert("A doboz mérete: " + $('#doboz').css('width'));
 $('#doboz').css('width', '500px');
 alert("A doboz mérete: " + $('#doboz').css('width'));
 });
 });*/
$('document').ready(function(){
    $('#gomb').click(function(){
        alert('A doboz mérete: ' + $('#doboz').css('width'));
        $('#doboz').css('width', '500px');
        alert('A doboz új mérete: ' + $('#doboz').css('width'));
    });
});