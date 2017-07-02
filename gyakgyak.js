$(document).ready(function(){
    $('div').on('click', ablak);
    $('body').on('click', '#gomb', '#sotetablak', torol);
});

function ablak()
{
    var ablakok='<div id="sotetablak"></div>';
    ablakok += '<div id="tarolo"><div id="soveg">Kérem ne szórakozzon a narancssárga négyzettel!<div id="gomb">Ok</div></div></div>';
    $('body').prepend(ablakok);
}
function torol()
{
    $('#sotetablak').remove();
    $('#tarolo').remove();
}
