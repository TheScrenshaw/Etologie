$(function() {
	var offset_top = 100;
    var check_div = function(){
    	var scroll_top = $(window).scrollTop();
        
        if (scroll_top > offset_top) 
        { 
            $("#hd-top").slideUp(100);
			$("#hd-cont").fadeIn(500);
			//$("#main").animate({margin: "17vh 0 0 0"});
    	} else {
            $("#hd-top").fadeIn(500);
			$("#hd-cont").fadeOut(100);
			//$("#main").animate({margin: "47,75vh 0 0 0"});
    	}   
	};
		
	// and run it again every time you scroll
	$(window).scroll(function() {
		check_div();
	});
});