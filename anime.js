$(document).ready(function () {
    $('div').on('click', anim);
});

function anim()
{
   /* $('div').animate({width: '200px', height: '-=20px', left: '200px', top: '200px', fontSize: '50px'},
    2000, 'easeInOutBounce', function (){alert('Vége!');});*/
    /* $('div').animate({width:'400px'}, 500).animate({height:'400px'}, 500);*/
    /*$('div').animate({width: '200px', backgroundColor: 'red'},
    {start: function(){$('body').prepend('Mozi')}, complete: function(){$('body').append('Film')}}, 1000);*/
    $('div').animate({backgroundColor: 'red'}, 500).animate({backgroundColor: 'orange'}, 500);/*Miért tűnik el!!!!!*/
}