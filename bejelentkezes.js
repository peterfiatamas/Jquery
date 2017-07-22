/*$(document).ready(function () {
 $('#kuld').click(function () {
 var nincshiba = true;
 var inputok = $('#reg input:text, #reg input:password');
 for (var i = 0; i < inputok.length; i++)
 {
 if ($(inputok[i].length).val() == '')
 {
 nincshiba = false;
 $(inputok[i]).addClass('hiba');
 } else
 {
 $(inputok[i]).removeClass('hiba');
 }
 }
 return nincshiba;
 });
 });*/


function kuldheto()
{
    var nincshiba = true;
    var inputok = $('#reg input:text, #reg input:password');
    for (var i = 0; i < inputok.length; i++)
    {
        if ($(inputok[i]).val() == '')
        {
            nincshiba = false;
            $(inputok[i]).addClass('hiba');
            $('#ures').html('Nincs kitöltve egy mező!');
        } else
        {
            $(inputok[i]).removeClass('hiba');
            $('#ures').html('');
        }
    }
    return nincshiba;
}
function pipa()
{
    jelszo = $('#jelszo');
    mutasd = $('#muti');
    if (mutasd.prop('checked'))
    {
        jelszo.prop('type', 'text');
        $('#uzenet').html('A jelszó látható!');

    } else
    {
        jelszo.prop('type', 'password');
        $('#uzenet').html('');
    }
}
function hozzaad()
{
    $('#mihez_ertesz .sor').last().after('<div class="sor"> Ehhez értek: <input type="text" name="kategoria[]" /><span id="torol" onclick="torol(this)">Töröl</span></div>');
       
}
function torol(elem)
{
    $(elem).parent().remove();
}