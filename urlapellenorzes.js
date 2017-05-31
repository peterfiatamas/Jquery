function ellenorzes()
{
    inputok = $('#reg input:text, #reg input:password');
    for (i = 0; i < inputok.length; i++)
    {
        if ($(inputok[i]).val() == '')
        {
           /* $(inputok[i]).css('border-color', 'red');*/
           $(inputok[i]).addClass('hibas');   /*Miért nem kell pont??*/
        }
        else
        {
            $(inputok[i]).removeClass('hibas');   
        }
    }
    return false
}
