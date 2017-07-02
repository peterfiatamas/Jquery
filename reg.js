$(document).ready(function(){
    $('#kuld').on('click', kuldes);
    $('body').on('click', '#pipa', pipa);
});

function kuldes()
{
    var hibatlan=true;
    var inputok=$('#reg input:text, #reg input:password');
    for (var i=0; i<inputok.length; i++)
    {
        if($(inputok[i]).val()=='')
        {
            hibatlan=false;
            $(inputok[i]).addClass('hiba');
            $('#hibauzenet').text('Minden mezőt ki kell tölteni!');
        }else
        {
          $(inputok[i]).removeClass('hiba');  
          $('#hibauzenet').text('');
        }
    }
    return hibatlan;
}

function pipa()
{
    var jelszo=$('#jelszo');
    var mutasd=$('#pipa');
    if (mutasd.prop('checked'))
    {
        jelszo.prop('type', 'text');
        $('#lathato').text('A jelszó látható!');
    }else
    {
        jelszo.prop('type', 'password');
        $('#lathato').text('');
    }
}