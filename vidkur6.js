function ellenorzes()
{
    inputok = $('#reg input:text, #reg input:password');

    for (i = 0; i < inputok.length; i++)
    {
        if ($(inputok[i]).val() == '')

        {
            $(inputok[i]).addClass('hibas');
        } else
        {
            $(inputok[i]).removeClass('hibas');
        }
    }
    return false;
}

$(document).ready(function () {
    $('button').click(function () {
        $('button').html("Next step");
    });
});
