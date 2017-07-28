$(document).ready(function(){
    $('#indit').on('click', ind);
    $('#megallit').on('click', megal);
});

function ind()
{
    $('#negyzet').animate({left: 800}, 4000).delay(2000).animate({top: 400}, 4000);
   
}

function megal()
{
   $('#negyzet').stop(false, true);
}