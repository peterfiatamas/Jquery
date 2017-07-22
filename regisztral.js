$(document).ready(function () {
    $('#kuld').on('click', urlap);
    $('#mutasd').on('click', pipa);
    $('button').on('click', gord);
    $('#letrehoz').on('click', letre);
    $('body').on('click','#torol', torol);
});

function urlap()
{
    var nincshiba = true;
    var inputok = $('#reg input:text, #reg input:password');
    for (var i = 0; i < inputok.length; i++)
    {
        if ($(inputok[i]).val() == '')
        {
            nincshiba = false;
            $(inputok[i]).addClass('hiba');
            $('#ures').text('Minden mezőt ki kell tölteni!');
        } else
        {
            $(inputok[i]).removeClass('hiba');
            $('#ures').text('');
        }
    }
    return nincshiba;
}



function pipa()
{
    var jelszo = $('#jelszo');
    var muti = $('#mutasd');
    if(muti.prop('checked'))
    {
        jelszo.prop('type', 'text');
        $('#uzenetszoveg').text('A jelszó látható!');
    }else
    {
        jelszo.prop('type', 'password');
        $('#uzenetszoveg').text('');
    }
}


function gord()
{
    if ($('p').is(':visible'))
    {
        $('p').effect('explode');
    } else
    {
        $('p').slideDown();
    }
}

function letre()
{
    $('#sor').last().after('<div id="sor">Ehhez értek:<input type="text" name="kategoria[]"><span id="torol" torol(this)>Törlés</span></div>');
}
function torol()
{
    $(this).parent().remove();
}