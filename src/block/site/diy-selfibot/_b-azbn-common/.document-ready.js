$(function() {
	
	$('.bottom-bordered .bb-help').tooltip();
	
	$(document.body).on('click.azbn', '.b-azbn-diy-selfibot-container .youtube-btn', {}, function(event){
		event.preventDefault();
		
		var btn = $(this);
		var uid = btn.attr('data-youtube-uid');//href="https://www.youtube.com/embed/qo-35n1BBms"
		
		$('.b-azbn-modal-block .youtube-modal-video').attr('src', 'https://www.youtube.com/embed/' + uid);
		
	});
	
	$.okvideo({
		target : $('.b-azbn-diy-selfibot-container .b-azbn-slide[data-slide-id="1"]'),
		video : $('.b-azbn-diy-selfibot-container .b-azbn-slide[data-slide-id="1"]').attr('data-okvideo-uid'),
		volume : 100,
		hd : true,
		disablekeyControl : true,
		captions : false,
		loop : true,
		controls : false,
	});
	
});