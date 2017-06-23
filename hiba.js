$(document).ready(function(){
    $('img').error(p);
});
function p()
{
    /*alert('A kép nem létezik!');*/
}
$( window ).resize(function() {
  $( "body" ).prepend( "<div>" + $( window ).width() + "</div>" );
});