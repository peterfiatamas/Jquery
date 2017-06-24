$(document).ready(function () {
    $('#kuld').on('click', kuld);
    $('#mutasd').on('click', pipa);
    $('#elem').on('click', mihez);
    $('body').on('click', '#torol', torol);
    $('button').on('click', popup);
    $('body').on('click', '#gombi','#sotet', eltavolit);
});
function kuld()
{
    var hibatlan = true;
    var inputok = $('#reg input:text, #reg input:password');
    for (var i = 0; i < inputok.length; i++)
    {
        if ($(inputok[i]).val() == '')
        {
            hibatlan = false;
            $(inputok[i]).addClass('hiba');
            $('#hibasurlap').text('Minden mezőt ki kell tölteni!');
        } else
        {
            $(inputok[i]).removeClass('hiba');
            $('#hibasurlap').text('');
        }
    }
    return hibatlan;
}

function pipa()
{
    var jelszo = $('#jelszo');
    var muti = $('#mutasd');
    if (muti.prop('checked'))
    {
        jelszo.prop('type', 'text');
        $('#jelolo').text('A jelszó látható!');
    } else
    {
        jelszo.prop('type', 'password');
        $('#jelolo').text('');
    }
}
function mihez()
{
    $('#sor').last().after('<div id="sor">Ehhez értek:<input type="text" id="sor"><span id="torol">Töröl</span></div>');
}
function torol()
{
    $(this).parent().remove();
}
function popup()
{
    var ablak='<div id="sotet">ssss</div>';
    ablak +='<div id="uziablak"><div id="uzenet">Figyelem az oldalt csak magyar állampolgárok használhatják! Az oldal célja a gyakorlás. A szöveg olvasásáért felelőséget nem vállalunk!<div id="gombi">Ok</div></div></div>';
    $('body').prepend(ablak);
}    

function eltavolit()
{
    $('#sotet').remove();
    $('#uziablak').remove();
}