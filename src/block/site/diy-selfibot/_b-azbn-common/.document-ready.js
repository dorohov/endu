$(function() {
	
	$('.bottom-bordered .bb-help').tooltip();
	
	$(document.body).on('click.azbn', '.b-azbn-diy-selfibot-container .youtube-btn', {}, function(event){
		event.preventDefault();
		
		var btn = $(this);
		var uid = btn.attr('data-youtube-uid');//href="https://www.youtube.com/embed/qo-35n1BBms"
		
		$('.b-azbn-modal-block .youtube-modal-video').attr('src', 'https://www.youtube.com/embed/' + uid);
		
	});
	
});

$(function() {
	
	if($('.b-azbn-diy-selfibot-container').size()) {
		
		var slide = $('.b-azbn-diy-selfibot-container .b-azbn-slide[data-slide-id="1"]');
		
		// 'https://www.youtube.com/embed/' + 'VfFyus8TNJ8'
		var opt = {
			target : slide,
			video : slide.attr('data-okvideo-uid'),
			volume : 100,
			hd : true,
			disablekeyControl : true,
			captions : false,
			loop : false,
			controls : false,
			annotations: false,
		};
		
		if(!screenJS.isXS() && !screenJS.isSM()) {
			
		} else {
			opt.hd = false;
		}
		
		//$(window).data('okoptions', opt);
		
		//$.okvideo(opt);
		
	}
	
});

$(function() {

	$(document.body).on('click.azbn', '.b-azbn-diy-selfibot-container .content-menu', {}, function(event){
		event.preventDefault();
		
		$('.b-azbn-diy-selfibot-container .content-menu-cont').toggleClass('active');
		$('.b-azbn-diy-selfibot-container .down-scroll-btn').toggle();
		
	});

});