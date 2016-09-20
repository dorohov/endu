
/*
start .go-to-top window-scroll
*/

$(
	function() {
		
		var pos = $(document).scrollTop();
		
		var gototop = $('.goto-top');
		if(gototop.hasClass('active')) {
			if(pos < 450) {
				gototop.removeClass('active');
			}
		} else {
			if(pos > 450) {
				gototop.addClass('active');
			}
		}
		
	}
);

/*
end .go-to-top window-scroll
*/
