$(document).ready(function(){
    $('button').on('click', propup);
    $('body').on('click', '#gomb', '#tarolo', torol);
    $('#kuld').on('click', kuld);
});

function propup()
{
    var sotet = '<div id="sotet">sss</div>';
    sotet += '<div id="tarolo"><div id="soveg-tarolo">Tisztelt felhasználó! A lkjlkj jk oiuzt hjk n lkjhgzu mnk jkoiu jkliujhz.<div id="gomb">Ok</div></div></div>';
    $('body').prepend(sotet);
}
function torol()
{
    $('#tarolo').remove();
    $('#sotet').remove();
}

function kuld()
{
    var hibatlan = true;
    var inputok = $('input:text');
    for(var i=0; i<inputok.length; i++)
    {
        if($(inputok[i]).val()=='')
        {
            hibatlan=false;
            $(inputok[i]).addClass('hiba');
            $('#uzenet').text('Minden mezőt ki kell tölteni!');
        }else
        {
            $(inputok[i]).removeClass('hiba');
            $('#uzenet').text('');
        }
    }
    return hibatlan;
}