function valtoztat()
{
    jelszo = $('#jelszo')
    mutasd = $('#mutasd')
    if (mutasd.prop('checked'))
    {
        jelszo.prop('type', 'text');
    } else
    {
        jelszo.prop('type', 'password');
    }
}



   