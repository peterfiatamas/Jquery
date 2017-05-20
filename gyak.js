/*$(function(){
    $(".fo-menupont").click(function(){
        $(this).parent().find(".gordulo").slideDown("fast");
        $(this).parent().hover(
                function(){
                $(this).parent().select(".gordulo").slideUp("fast");
                }
        )
    });
});*/
$(function () {
    //console.log('ready!');//
    $(".fo-menupont").click(function () {
        $(this).parent().find(" .gordulo").slideDown("slow");
        $(this).parent().hover(
                function () {
                    $(this).parent().find(".gordulo").slideUp("slow");
                }
        )

    });
});


