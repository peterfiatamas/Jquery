$(document).ready(function(){
    $('h2').each(function(){
        $(this).on('click', pop);
    });
});

function pop()
{
   if(!$(this).next().is(':visible'))
   {
       $(this).next().show('blind', {easing:'easeOutBounce', duration: 500});   
       $(this).append('<span id="torol"> (elrejtés)</span>');
       /*$('#logo').hide();*/
   }else
   {
       $(this).next().hide('blind', {easing:'easeOutBounce', duration: 500});   
       $(this).children().remove();
   }
}