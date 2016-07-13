$(function() {
	
	$('.bottom-bordered .bb-help').tooltip();
	
	$(document.body).on('click.azbn', '.b-azbn-diy-selfibot-container .youtube-btn', {}, function(event){
		event.preventDefault();
		
		var btn = $(this);
		var uid = btn.attr('data-youtube-uid');//href="https://www.youtube.com/embed/qo-35n1BBms"
		
		$('.b-azbn-modal-block .youtube-modal-video').attr('src', 'https://www.youtube.com/embed/' + uid);
		
	});
	
	$(document.body).on('click.azbn', '.b-azbn-diy-selfibot-container .youtube-btn2', {}, function(event){
		event.preventDefault();
		
		var btn = $(this);
		var uid = btn.attr('data-youtube-uid');//href="https://www.youtube.com/embed/qo-35n1BBms"
		
		$('.b-azbn-modal-block .youtube-modal-video').attr('src', 'https://www.youtube.com/embed/' + uid);
		
	});
	
	$(document.body).on('click.azbn', '.bottom-bordered-mobile-btn', {}, function(event){
		event.preventDefault();
		
		var btn = $(this);
		var block = btn.parent();
		var bb = block.find('.bottom-bordered');
		bb.fadeToggle('fast');
		btn.toggleClass('active');
		
	});
	if(device.mobile() || device.tablet()) {
		$('.bottom-bordered-mobile-btn').trigger('click.azbn');
	}
	
	
	$(document.body).on('click.azbn', '.menu-list-mobile-btn', {}, function(event){
		event.preventDefault();
		
		var btn = $(this);
		var block = btn.parent();
		var bb = block.find('ul');
		bb.fadeToggle('fast');
		$('.menu-block-title').toggle();
		btn.toggleClass('active');
		
	});
	if(device.mobile() || device.tablet()) {
		$('.menu-list-mobile-btn').trigger('click.azbn');
		$('.menu-block-title').hide();
	}
	
	
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