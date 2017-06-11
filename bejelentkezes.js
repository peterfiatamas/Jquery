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