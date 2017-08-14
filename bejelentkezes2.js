$(document).ready(function () {
    $('#kuld').on('click', reg);
    $('#muti').on('click', pipa);
    $('#info').on('click', gord);
    $('#hozzaad').on('click', mihez);
    $('body').on('click', '#torol', torol);
    $('body').on('click', '#meglepi', leg );
});

function reg()
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
    var muti = $('#muti');
    if (muti.prop('checked'))
    {
        jelszo.prop('type', 'text');
    } else
    {
        jelszo.prop('type', 'password');
    }
}

function gord()
{
    if ($('#eltuno').is(':visible'))
    {
        $('#eltuno').slideUp();
    } else
    {
        $('#eltuno').slideDown();
    }
}

function mihez()
{
    $('.sor').last().after('<div class="sor"> Ehhez értek: <input type="text" name="kategoria[]" /><spam id="torol"  torol(this)>Törlés</spam></div>');
}

function torol()
{
    $(this).parent().remove();
}

function leg()
{
    if ($('#szoveg').is(':visible'))
    {
        $('#szoveg').slideUp();
    } else
    {
        $('#szoveg').slideDown();
    }
}

