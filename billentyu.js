$(document).ready(function () {
    $('button').on('click', nyom);
    $('#nev').hover( masik);
    $('a').click(a);
    $('#gomb').click(b);
});
function nyom()
{
    $('div').toggle();

}
function masik()
{
    alert('oooo');
}
function a()
{
    alert('fff');
}
function b()
{
    $('a').trigger('click');
}