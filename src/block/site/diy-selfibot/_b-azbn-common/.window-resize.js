$(function() {

	if(		$('html').hasClass('desktop')
			&&
			($(window).outerHeight(true) < 768)
			//&&
			//($(window).outerWidth(true) / $(window).outerHeight(true) > 1.85)
		) {
		
		if($('body').hasClass('xs-h')) {
			
		} else {
			$('body').addClass('xs-h');
		}
		
	} else {
		$('body').removeClass('xs-h');
	}

});