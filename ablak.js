$(document).ready(function(){
    $('#klik').on('click', pop);
    $('body').on('click', '#tarolo', '#gomb', torol);
    $('button').on('click', gord);
});

function pop()
{
    var ablak = '<div id="sotet">ss</div>';
    ablak += '<div id="tarolo"><div id="feherablak">Figyelem fontos információ a felhasználó részére!<div id="gomb">Ok</div></div></div>';
    $('body').prepend(ablak);
}

function torol()
{
    $('#sotet').remove();
    $('#tarolo').remove();
}

function gord(){
    if($('#adat').is(':visible'))
    {
        $('#adat').effect('puff');
    }else
    {
        $('#adat').slideDown();
    }
}