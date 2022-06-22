$(function(){

	// back to top
	$('.bktp i').click(function(){
		$('html, body').animate({
		scrollTop:0
		}, 500 );
	});

	// back to top show and hide
	$(window).scroll(function(){
		var btpShowHide = $(this).scrollTop();
	
		if (btpShowHide > 20) {
		$('.bktp i').fadeIn(500);
		} else {
		$('.bktp i').fadeOut(500);
		}
	});

	new WOW().init();		  

});

