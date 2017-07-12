$(document).ready(function(){
    $('body').on('click','#klik', ablak);
    $('body').on('click','#tarolo','#gomb', torol);
    $('button').on('click', gord);
});

function ablak()
{
    var elsoablak = '<div id="sotetablak">sss</div>';
    elsoablak += '<div id="tarolo">ff<div id="szovegablak">Figyelem aki rossz azt megverem!<div id="gomb">Ok</div></div></div>';
    $('body').prepend(elsoablak);
}

function torol()
{
    $('#sotetablak').remove();
    $('#tarolo').remove();
}

function gord()
{
    if($('#adat').is(':hidden'))
    {
        $('#adat').slideDown();
    }else
    {
        $('#adat').slideUp();
    }
}
/*function gord()
{
    $('#adat').slideToggle();
}*/
