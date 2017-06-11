$(document).ready(function(){
    $('#kuld').click(function(){
       var hibatlan=true;
       var inputok=$('#reg input:text, #reg input:password');
       for(var i=0; i<inputok.length; i++)
       {
           if($(inputok[i]).val()=='')
           {
               hibatlan=false;
               $(inputok[i]).addClass('hiba');
               $('#ures').html('Figyelem minden mező kitöltése kötelező!');
           }else
           {
               $(inputok[i]).removeClass('hiba');
               $('#urest').html('');
           }
       }
       return hibatlan;
    });
});
function pipa()
{
    jelszo=$('#jelszo');
    muti=$('#muti');
    if(muti.prop('checked'))
    {
        jelszo.prop('type', 'text');
        $('#uzenet').html('Figyelem a jelszó látható!');
    }else
    {
        jelszo.prop('type', 'password');
        $('#uzenet').html('');
    }
}
$(document).ready(function(){
    $('#info').click(function(){
        $('#eltuno').slideToggle();
    });
});