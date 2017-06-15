/*$(document).ready(function(){
 $('#kuld').click(function()
 {
 var hibatlan=true;
 var inputok=  $('#reg input:text, #reg input:password');
 for (var i=0; i<inputok.length; i++)
 {
 if($(inputok[i]).val()=='')
 {
 hibatlan=false;
 $(inputok[i]).addClass('hiba');
 }else
 {
 $(inputok[i]).removeClass('hiba');
 }
 }
 return hibatlan;
 });
 });*/
function ellen()
{
    var hibatlan = true;
    var inputok = $('#reg input:text, #reg input:password');
    for (var i = 0; i < inputok.length; i++)
    {
        if ($(inputok[i]).val() == '')
        {
            hibatlan = false;
            $(inputok[i]).addClass('hiba');
        } else
        {
            $(inputok[i]).removeClass('hiba');
        }
    }
    return hibatlan;

}
function pipa()
{
    jelszo = $('#jelszo');
    muti = $('#mutasd');
    if (muti.prop('checked'))
    {
        jelszo.prop('type', 'text');
        $('#uzenetszoveg').html('<div style=" color:red; background: pink; border: 1px solid red; padding: 5px; width: 300px;">Figyelem!! A jelszó látható lesz!');
    } else
    {
        jelszo.prop('type', 'password');
        $('#uzenetszoveg').html('');
    }
}
/*Ennek a hibája az hogy egyszerre jelenik meg a jelszó és az üzenet!*/
/*function pipa()
 {
 jelszo = $('#jelszo');
 muti = $('#mutasd');
 if (muti.prop('checked'))
 {
 jelszo.prop('type', 'text');
 $('#uzenet').append('<div id="figyelem">Figyelem a jelszó látható!</div>');
 } else
 {
 jelszo.prop('type', 'password');
 $('#figyelem').remove();
 }
 }*/
