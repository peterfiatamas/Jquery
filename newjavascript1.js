$(document).ready(function () {
    $('#klik').on('click', fel);
    $('body').on('click', '#gomb', '#sotet', torol);
    $('button').on('click', gord);
    $('button').on('click', animate);
});

function fel()
{
    var ablak = '<div id="sotet">ss</div>';
    ablak += '<div id="tarolo"><div id="feher">A jhdb kj kjdhsze nmd kjshban mmnsj jhsb mmxn. A kjsdnm lk mnsjhd k nmxnbsz.<div id="gomb">Ok</div></div></div>';
    $('body').prepend(ablak);
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
        $('#adat').slideUp();
    } else
    {
        $('#adat').slideDown();
    }
}



function animate()
{
    var szoveg = ('Rejtett elem.');
    if ($('#elem').is(':visible') || $('#tartalom').is(':visible'))
    {
        $('#elem').animate({width: '0', height: '0'}, 1000);
        $('#tartalom').remove();
    } else
    {
        $('#elem').animate({width: '50px', height: '50px'}, 1000);
        $('#elem').text(szoveg);
        $('#elem').css("color", "white");/*Miért nem törli a betüket?*/
        $('#tartalom').removeAttr(szoveg);
    }
}

//$('#elem').animate({width:'0', height:'0'},1000);

/*function animate()
{
    if ($('#elem').is(':visible') || $('#tartalom').is(':visible'))
    {
        $('#elem').animate({width: '0', height: '0'}, 1000);
        $('#tartalom').remove();
    } else
    {
        $('#elem').animate({width: '50px', height: '50px'}, 1000);
        $('#elem').text('Rejtett elem.');
        $('#elem').css("color", "white");/*Miért nem törli a betüket?*/
   // }
//}
