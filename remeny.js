function figyelmeztetes()
{
    console.log('attr', $('input[name=nev]').attr('value'));
    console.log('prop', $('input[name=nev]').prop('value'));
        console.log('val', $('input[name=nev]').val());
    var hibatlan = true;
    var inputok = $('#reg input:text, #reg input:password')
    for (var i = 0; i < inputok.length; i++)
    {
        if ($(inputok[i]).val() == '')
        {
            hibatlan = false;
            $(inputok[i]).addClass('hibavan');
        } else
        {
            $(inputok[i]).removeClass('hibavan');
        }
    }
    return hibatlan;
}
/*$(document).ready(function(){
 alert('ready');
 });*/
function mutat()
{
    jelszo = $('#jelszo');
    muti = $('#muti');
    if (muti.prop('checked'))
    {
        jelszo.prop('type', 'text');
    } else
    {
        jelszo.prop('type', 'password');
    }
}

