function ellenorzes()
{
    var nincshiba = true;
    var inputok=$('#reg input:text, #reg input:password');
    for(var i=0; i<inputok.length; i++)
    {
        if($(inputok[i]).val()=='')
        {
            nincshiba=false;
            $(inputok[i]).addClass('hibas');
        }else
        {
            $(inputok[i]).removeClass('hibas');
        }
    }
    return nincshiba;
}
$(document).ready(function(){
    $('button').click(function(){
        $('div').slideToggle();
    });
});