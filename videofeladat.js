$('document').ready(function () {
    $('#gomb').click(function () {
        $('input').each(function (i, elem) {
            alert($(elem).val());
        });
    });
});