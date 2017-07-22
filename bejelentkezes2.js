function kuldheto()
{
    var hibatlan=true;
    var inputok=$('#reg input:text, #reg input:password');
    for(var i=0; i<inputok.length; i++)
    {
        if($(inputok[i]).val()=='')
        {
            hibatlan=false;
            $(inputok[i]).addClass('hiba');
            $('#uzenet').html('Figyelem minden mezőt ki kell tölteni!');
        }else
        {
            $(inputok[i]).removeClass('hiba');
            $('#uzenet').html('');
        }
    }
    return hibatlan;
}
function pipa()
{
    jelszo=$('#jelszo');
    mutasd=$('#muti');
    if(mutasd.prop('checked'))
    {
        jelszo.prop('type', 'text');
        $('#ures').html('Figyelem a jelszó látható!');
    }else
    {
        jelszo.prop('type', 'password');
        $('#ures').html('');
    }
}
$(document).ready(function(){
   $('#info').click(function(){
       $('#eltuno').slideToggle('fast');
   }); 
});
function hozzaad()
{
    $('#mihez_ertesz .sor').last().after('<div class="sor"> Ehhez értek: <input type="text" name="kategoria[]" /><span id="torol" onclick="torol(this)">Törlöm</span></div>');
}
function torol(elem)
{
    $(elem).parent().remove();
}
$(document).ready(function(){
    $('#meglepi').on('click', gord);
});

function gord()
{
    if($('#szoveg').is(':visible'))
    {
        $('#szoveg').animate({fontSize:'10px'},200).slideUp();
        $('#meglepi').animate({width:'100px'});
    }else
    {
        $('#szoveg').animate({fontSize:'15px'}).slideDown();
        $('#meglepi').animate({width:'150px'});
    }
}
