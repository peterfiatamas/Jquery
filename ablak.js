$(document).ready(function(){
    $('button').on('click', ablak);
    $('body').on('click', '#gomb, #sotet', bezar);
    $('#kuld').on('click', kuldes);
});
function ablak()
{
    var sotetablak = '<div id="sotet">qwer</div>'
    sotetablak += '<div id="tarolo"><div id="uziablak">A hiedelemmel ellentétben a Lorem Ipsum nem véletlenszerû szöveg. Gyökerei egy Kr. E. 45-ös latin irodalmi klasszikushoz nyúlnak. <div id="gomb">Ok</div></div></div>'
    $('body').prepend(sotetablak);
}       
function bezar()
{
    $('#sotet').remove();
    $('#tarolo').remove();
}
function kuldes()
{
    var hibatlan=true;
    var inputok=$('form input:text');
    for (var i=0; i<inputok.length; i++)
    {
        if($(inputok[i]).val()=='')
        {
            hibatlan=false;
            $(inputok[i]).addClass('hiba');
            $('#uzenet').text('Minden mezőt ki kell tölteni!');
        }else
        {
            $(inputok[i]).removeClass('hiba');
            $('#uzenet').text('');
        }
    }
    return hibatlan;
}