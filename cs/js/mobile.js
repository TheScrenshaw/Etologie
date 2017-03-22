$(document).ready(function() {
    $("#mobile-menu button").click(function() {
        $(this).next().show();
    });
    $("#mobile-menu-container").click(function() {
            $(this).hide();
    });
});