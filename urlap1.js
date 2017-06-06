function ellenorzes()
{
    var hibatlan = true;
    var inputok = $('#reg input:text, #reg input:password')
    for (var i = 0; 0 < inputok.length; i++)
    {
        if ($(inputok[i]).val() == '')
        {
            hibatlan = false;
            $(inputok[i]).addClass('hibas2');
        } else
        {
            $(inputok[i]).removeClass('hibas2');
        }
    }
    return hibatlan;
}
function valtoztat()
{
    jelszo = $('#kod')
    mutasd = $('#mutasd')
    if (mutasd.prop('checked'))
    {
        jelszo.prop('type', 'text');
    } else
    {
        jelszo.prop('type', 'password');
    }
}
