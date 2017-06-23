$(document).ready(function () {
    $('#kuld').on('click', kuld);
    $('#mutasd').on('click', pipa);
    $('#letrehoz').on('click', mihez);
    $('body').on('click', '#torol', torol);
    $('button').on('click', popup);
    $('body').on('click', '#gomb', '#sotetablak', bezar);
});
function kuld()
{
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
function pipa()
{
    var jelszo = $('#jelszo');
    var mutasd = $('#mutasd');
    if (mutasd.prop('checked'))
    {
        jelszo.prop('type', 'text');
        $('#uzenetszoveg').text('A jelszo látható!');
    } else
    {
        jelszo.prop('type', 'password');
        $('#uzenetszoveg').text('');
    }
}
function mihez()
{
    $('#sor').last().after('<div id="sor">Ehhez értek:<input type="text" name="kategoria[]"><span id="torol">Töröl</span></div>');
}
function torol()
{
    $(this).parent().remove();
}
function popup()
{
    var sablak='<div id="sotetablak">asdff</div>'
    sablak += '<div id="uzenet-doboz"><div id="uzenet">A lkélk élkélkélk élkélk élkélkélk. Boiuiou iuoiuoiu oiu oiuoiuiou iuiooioiuo oiuoiu. Mfasf sdasd dgsdgsdg gddsg dsgsdgsdg dgsdg sdgsdgsdgsdgsgd dsgdg.<div id="gomb">Ok</div></div></div>'
    $('body').prepend(sablak);
}
function bezar()
{
    $('#sotetablak').remove();
    $('#uzenet-doboz').remove();
}