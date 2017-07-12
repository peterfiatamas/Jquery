$(document).ready(function(){
    $('a').each(function(){
        $(this).mouseenter( fole);
        $(this).mouseleave( le);
        $(this).mousemove( moz);
    });
});

function fole()
{
    var title = $(this).attr('title');
    $(this).removeAttr('title');
    $(this).after('<div id="buborek">'+title+'</div>');
}
function le()
{
 var title = $('#buborek').text();  
 $('#buborek').remove();
 $(this).attr('title', title);
}
function moz(e)
{
    $('#buborek').css('left', e.pageX+20);
    $('#buborek').css('top', e.pageY+15);
}