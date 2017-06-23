function pipa()
{
    var jelszo = $('#jelszo');
    var muti = $('#mutasd');
    if (muti.prop('checked'))
    {
        jelszo.prop('type', 'text');
        $('#uzenetszoveg').text('A jelszó látható!');
    } else
    {
        jelszo.prop('type', 'password');
        $('#uzenetszoveg').text('');
    }
}
function mihez()
{
    $('#sor').last().after('<div id="sor">Ehhez értek:<input type="text" name="kategoria[]"><span id="torol" >Törlés</span></div>');
}
function torol()
{
    $(this).parent().remove();
}
function popup() {
    var template = '<div id="sotet" >poipoi</div>';
    template += '<div class="uzenet-doboz">\n\
                    <div id="uzenet">\n\
                        Mi a Lorem Ipsum? Nem csak 5 évszázadot élt túl, de az elektronikus betûkészleteknél is változatlanul megmaradt. Az 1960-as években népszerûsítették a Lorem Ipsum részleteket magukbafoglaló Letraset lapokkal, és legutóbb softwarekkel mint például az Aldus Pagemaker.\n\
                        <div id="gomb">Ok</div>\n\
                    </div>\n\
                 </div>';

    $('body').prepend(template);

}

function bezar()
{
    $('#sotet').remove();
    $('.uzenet-doboz').remove();
}
function valid() {
    var nincshiba = true;
    var inputok = $('#reg input:text, #reg input:password');
    for (var i = 0; i < inputok.length; i++)
    {
        if ($(inputok[i]).val() == '')
        {
            nincshiba = false;
            $(inputok[i]).addClass('hiba');
            $('#ures').text('Minden mező kitöltése kötelező!');
        } else
        {
            $(inputok[i]).removeClass('hiba');
            $('#ures').text('');
        }
    }
    return nincshiba;
}

$(document).ready(function () {
    $('#mutasd').on('click', pipa);
    $('#reg').on('submit', valid);
    $('button').on('click', popup);
    $('#letrehoz').on('click', mihez);
    $('body').on('click', '#torol', torol);
    $('body').on('click', '#gomb, #sotet', bezar);
});
