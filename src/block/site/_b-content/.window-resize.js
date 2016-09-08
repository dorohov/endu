var h_window = $(window).height(), 
	w_window = $(window).width(),

	h_navbar = $('.b-top-menu').outerHeight(true),
	h_header = $('.b-top-header').outerHeight(true),
	h_footer = $('.b-bottom-footer').outerHeight(true),
	h_content = h_window - h_navbar - h_footer;

if (device.mobile()) {
	$('.content-block__text').removeAttr("style");
} else {
	$('.content-block__text').css("min-height", h_content);
}