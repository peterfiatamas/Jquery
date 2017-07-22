$(document).ready(function () {
    $('a').each(function () {
        $(this).mouseenter(fel);
        $(this).mouseleave(le);
        $(this).mousemove(moz);
    });
});

function fel()
{
    var title = $(this).attr('title');
    $(this).removeAttr('title');
    $(this).after('<div id="bubi">' + title + '</div>');
}

function le()
{
    var title = $('#bubi').text();
    $('#bubi').remove();
    $(this).attr('title', title);
}

function moz(e)
{
    $('#bubi').css('left', e.pageX + 20);
    $('#bubi').css('top', e.pageY + 15);
}
