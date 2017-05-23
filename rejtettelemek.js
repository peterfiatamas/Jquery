$(document).ready(function () {
    $('button').click(function () {
        $('div').css("visibility", "visible");
        $('button').click(function () {
            $('div').css("visibility", "hidden");
        });
    });
});
