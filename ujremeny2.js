function ellen()
{
    var hibatlan = true;
    var inputok = $('#reg input:text, #reg input:password');
    for (var i = 0; i < inputok.length; i++)
    {
        if ($(inputok[i]).val() == '')
        {
            hibatlan = false;
            $(inputok[i]).addClass('hiba');
            $('#ures').html('Minden mező kitöltése kötelező!');
        } else
        {
            $(inputok[i]).removeClass('hiba');
            $('#ures').html('');
        }
    }
    return hibatlan;
}
function pipa()
{
    jelszomezo = $('#jelszo');
    jelolonegyzet = $('#mutasd');
    if (jelolonegyzet.prop('checked'))
    {
        jelszomezo.prop('type', 'text');
        $('#uzenetszoveg').html('Figyelem a jelszó látható!');
    } else
    {
        jelszomezo.prop('type', 'password');
        $('#uzenetszoveg').html('');
    }
}
function mihez()
{
    $('#sor').last().after('<div id="sor">Ehhez értek:<input type="text" name="kategoria[]"><span id="toroles" onclick="torol(this)">Törlés</span></div>');
}
function torol(elem)
{
    $(elem).parent().remove();
}
$(document).ready(function () {
    $('button').click(function () {
        $('body').prepend('<div id="sotet" onclick="bezar()">grrgerg</div>');
        $('#sotet').after('<div id="uzenet">Mi a Lorem Ipsum? Nem csak 5 évszázadot élt túl, de az elektronikus betûkészleteknél is változatlanul megmaradt. Az 1960-as években népszerûsítették a Lorem Ipsum részleteket magukbafoglaló Letraset lapokkal, és legutóbb softwarekkel mint például az Aldus Pagemaker.</div>')
        /*var szeles = Math.round($(window).width() - $('#uzenet').innerWidth()) / 2;
        var magas = Math.round($(window).innerHeight() - $('#uzenet').innerHeight()) / 2;
        alert(szeles);*/
        /* alert($(window).height());*/
    });
});
function bezar()
{
    $('#sotet').remove();
    $('#uzenet').remove();
}