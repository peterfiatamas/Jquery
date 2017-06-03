function ellenorzes()
{
    var nincshiba = true;
    var inputok = $('#reg input:text, #reg input:password');
    for (var i = 0; i < inputok.length; i++)
    {
        if ($(inputok[i]).val() == '')
        {
            /* $(inputok[i]).css('border-color', 'red');*/
            nincshiba = false;
            $(inputok[i]).addClass('hibas');   /*Miért nem kell pont??*/
        } else
        {
            $(inputok[i]).removeClass('hibas');
        }
    }
    return nincshiba;
}
/*urlapellenorzes2 a gyakorló oldal*/