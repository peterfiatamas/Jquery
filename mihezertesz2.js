function hozzaad()
{
    $('#mihez_ertesz .sor').last().after('<div class="sor"> Ehhez értek: <input type="text" name="kategoria[]" /><span id="torles" onclick="torol(this)">Törlöm</span></div>');
}

function torol(elem)
{
    $(elem).parent().remove();
}