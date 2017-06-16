$(document).ready(function () {
    $('#kuld').on('click', function () {
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
    });
});
function pipa()
{
    jelszo = $('#jelszo');
    muti = $('#mutasd');
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
    $('#sor').last().after('<div id="sor">Ehhez értek:<input type="text" name="kategoria[]"><span id="torol" onclick="torol(this)">Törlés</span></div>');
}
function torol(elem)
{
    $(elem).parent().remove();
}
$(document).ready(function () {
    $('button').click(function () {
        $('body').prepend('<div id="sotet" onclick="bezar()">poipoi</div>');
        $('#sotet').after('<div id="uzenet">Mi a Lorem Ipsum? Nem csak 5 évszázadot élt túl, de az elektronikus betûkészleteknél is változatlanul megmaradt. Az 1960-as években népszerûsítették a Lorem Ipsum részleteket magukbafoglaló Letraset lapokkal, és legutóbb softwarekkel mint például az Aldus Pagemaker.</div>');
        $('#uzenet').append('<div id="gomb" onclick="bezar()">Ok</div>');
    });
});
function bezar()
{
    $('#sotet').remove();
    $('#uzenet').remove();
}