$(function () {
    $('button').click(function () {
        var nev = $("#nev").val();
        if (nev.length > 0) {
            var template = "<li>" + nev + "</li>";
            $('ul').append(template);
            $("#nev").val("");
        } else {
            alert("Töltsd ki a név mezőt!");
        }
    });
});