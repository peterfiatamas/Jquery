$(document).ready(function(){
    $('#mihez_ertesz #uj').on('click', kuld);
    $('body').on('click', '#torol', torol);
});

function kuld()
{
    $('.sor').last().after('<div class="sor"> Ehhez értek: <input type="text" name="kategoria[]" /><span id="torol" torol(this)>Törlés</span></div>');
}
function torol()
{
    $(this).parent().remove();
}