$(document).ready(function() {
    $("#btn-grant-urc").click(function(){
        $(this).next().toggleClass("down");
    });
    $("#btn-grant-gacr").click(function(){
        $(this).next().toggleClass("down");
    });
    $("#btn-grant-gauk").click(function(){
        $(this).next().toggleClass("down");
    });
});
