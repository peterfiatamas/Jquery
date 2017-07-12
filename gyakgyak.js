$(document).ready(function () {
    $('#kuld').on('click', teszt);
    $('#jelolo').on('click', muti);
});

function teszt()
{
    var hibatlan = true;
    var inputok = $('#reg input:text, #reg input:password');/*A checkbox-ot is keretezni akarom, kivéve a mutasd a jelszót*/
    for (var i = 0; i < inputok.length; i++)
    {
        if ($(inputok[i]).val() == '')
        {
            hibatlan = false;
            $(inputok[i]).addClass('hiba');
            $('#uzenet').text('Minden mezőt ki kell tölteni!');
        } else
        {
            $(inputok[i]).removeClass('hiba');
            $('#uzenet').text('');
        }
    }
    return hibatlan;
}

function muti()
{
    var jelszo = $('#jelszo');
    var jelolo = $('#jelolo');
    if (jelolo.prop('checked'))
    {
        jelszo.prop('type', 'text');
        $('#figyelmeztet').text('A jelszó látható!');/*Jó lenne ha a láthatóvátétel elött jelezne a figyelmeztetés.*/
    } else
    {
        jelszo.prop('type', 'password');
        $('#figyelmeztet').text('');
    }
}