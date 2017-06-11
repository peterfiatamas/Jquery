/*function ellen()
 {
 var nincshiba = true;
 var inputok = ('#reg input:text, #reg input:password');
 for (var i = 0; i < inputok.length; i++)
 {
 if ($(inputok[i]).val() == '')
 {
 nincshiba = false;
 $(inputok[i]).addClass('hiba');
 } else
 {
 $(inputok[i]).removeClass('hiba');
 }
 }
 return nincshiba;
 }*/
$(document).ready(function () {
    $('#kuld').click(function ()
    {
        var nincshiba = true;
        var inputok = $('#reg input:text, #reg input:password');
        for (var i = 0; i < inputok.length; i++)
        {
            if ($(inputok[i]).val() == '')
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
});
/*$(document).ready(function () {
 $('#kuld').click(function () {
 var nincshiba = true;
 var inputok = $('#reg input:text, #reg input:password')
 for (var i = 0; i < inputok.length; i++) {
 if ($(inputok[i]).val() == '')
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

function pipa()
{
    jelszo = $('#jelszo');
    mutasd = $('#mutasd');
    if (mutasd.prop('checked'))
    {
        jelszo.prop('type', 'text');
    } else
    {
        jelszo.prop('type', 'password');
    }
}
