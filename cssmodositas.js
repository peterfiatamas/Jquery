function szinez()
{
    $('div').first().addClass('hiba masik');
}
function masik()
{
    $('div').removeClass('hiba masik');
}
function valt()
{
    $('#gomb').toggleClass('gomb');
}
function ellenoriz()
{
    if ($('#hiba1').hasClass('hiba'))
    {
        alert('Igen');
    }else
    {
        alert('Nem');
    }
}
function szinez()
{
    $('#hiba2').css('color', 'red');
   /* alert($('#hiba2').css('color'));*/
   alert($(document).scrollTop());
}