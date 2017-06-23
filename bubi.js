/*$(document).ready(function () {
 $('a').each('hover', buborek);
 $(this).mouseenter(buborek);
 $(this).mouseleave(torol);
 
 });
 function buborek()
 {
 $(this).after('<div id="buborek">qqqq</div>');
 }
 function torol()
 {
 $('#buborek').remove()
 }*/
/*$(document).ready(function () {
    $('a').each(function () {
        $(this).mouseenter(function () {
            title = $(this).attr('title');
            $(this).removeAttr('title');
            $(this).after('<div id="buborek">' + title + '</div>');
        });
        $(this).mouseleave(function () {
            $('#buborek').remove();
            $(this).attr('title', title);
        });
        $(this).mousemove(function (e) {
            $('#buborek').css('left', e.pageX + 15);
            $('#buborek').css('top', e.pageY + 20);
        });
    });
});*/
$(document).ready(function () {
    $('a').each(function () {
        $(this).mouseenter(fole);
        $(this).mouseleave(le);
        $(this).mousemove(fe);
    });
});
function fole()
{
    title = $(this).attr('title');
    $(this).removeAttr('title');
    $(this).after('<div id="buborek">' +title+ '</div>');
}
function le()
{
    $('#buborek').remove();
    $(this).attr('title', title);
}
function fe(e)
{
    $('#buborek').css('left', e.pageX + 15);/*Mi az e?*/
    $('#buborek').css('top', e.pageY + 20);
}