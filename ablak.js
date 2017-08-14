$(document).ready(function () {
    $('#klik').on('click', pop);
    $('body').on('click', '#gomb', torol);
    $('#info').on('click', gord);
});


function pop()
{
    var sotetablak = '<div id="sotet">ss</div>';
    sotetablak += '<div id="tarolo"><div id="feheruziablak"> Figyelem! Ha kjs njsue kslk n sjncee kjamxd. Mahby kj mnsjd oie mlksui.<div id="gomb">Ok!</div></div></div>';
    $('body').prepend(sotetablak);
}

function torol()
{
    $('#sotet').remove();
    $('#tarolo').remove();
}

function gord()
{
    if ($('#adat').is(':visible'))
    {
        $('#adat').toggle('bounce', 500);
        $('#tartalom').text('Rejtett tartalom');
    } else
    {
        $('#adat').slideDown();
        $('#tartalom').remove();
    }
}