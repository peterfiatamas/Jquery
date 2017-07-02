$(document).ready(function () {
    $('a').each(function () {
        $(this).mouseenter(fel);
        $(this).mouseleave(le);
        $(this).mousemove(moz);
    });
});
function fel()
{
    var felirat = $(this).attr('title');
    $(this).removeAttr('title');
    $(this).after('<div id="bubi">' +felirat+ '</div>');
}
function le()
{
    var felirat = $('#bubi').text();
    $('#bubi').remove();
    $(this).attr('title', felirat);
}
function moz(e)
{
    $('#bubi').css('left', e.pageX + 15);
    $('#bubi').css('top', e.pageY + 20);
}




