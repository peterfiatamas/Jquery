/*$(document).ready(function () {
 $('#link').click( function (e)
 {
 e.preventDefault();
 alert($('#link').text());
 });
 });*/
$(document).ready(function () {
    $('#link').one('click mouseover', function (e)
    {
        e.preventDefault();
        alert($('#link').text());
       /* $('#link').off('click');*/
    });

    $('form').submit(function (e)
    {
        e.preventDefault();
        alert($('#szoveg').val());
    });
});