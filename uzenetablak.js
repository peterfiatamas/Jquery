function uzenet()
{
    $('body').prepend('<div id="uzenet" onclick="bezar()">ergerz</div>');
    $('#uzenet').after('<div id="ablak">Mauris mattis elementum sem tincidunt dictum.Mauris mattis elementum sem tincidunt dictum.Mauris mattis elementum sem tincidunt dictum.Mauris mattis elementum sem tincidunt dictum.Mauris mattis elementum sem tincidunt dictum.Mauris mattis elementum sem tincidunt dictum.Mauris mattis elementum sem tincidunt dictum. Vivamus et tristique nibh, vitae congue tellus.</div>');
    /*alert($('#ablak').innerWidth());*/
    /*var balrol = Math.round($(w indow).width() - $('#ablak').innerWidth()) / 2;
    var fentrol = Math.round($(window).height() - $('#ablak').innerHeight()) / 2;
    alert(fentrol);*/
}
function bezar()
{
    $('#uzenet').remove();
    $('#ablak').remove();
}
