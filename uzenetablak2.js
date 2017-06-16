function uzenet()
{
    $('body').prepend('<div id="uzenet" onclick="bezar()">poipoi</div>');
    $('#uzenet').after('<div id="ablak">Morbi scelerisque pellentesque nibh, et ultricies diam venenatis vel. Sed pulvinar augue velit, a malesuada odio aliquam bibendum. Nullam id neque lacus. Vestibulum eget est pellentesque, semper erat ac, pretium tellus. Nunc euismod est ac felis mollis, at porta sapien hendrerit. Etiam auctor hendrerit ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>');
    $('#ablak').append('<div onclick="bezar()" id="gomb">Ok</div>');
    var szeles = Math.round($(window).innerWidth() - $('#ablak').innerWidth()) / 2;
    var magas = Math.round($(window).innerHeight() - $('#ablak').innerHeight()) / 2;
    /*alert(magas);*/
   

}
function bezar()
{
    $('#uzenet').remove();
    $('#ablak').remove();
}
/*$(document).ready(function () {
$('body').on('click', '#gomb', function () {
        $('#uzenet, #ablak').remove();
    });
});*/ /*Ebben mi a hiba?*/