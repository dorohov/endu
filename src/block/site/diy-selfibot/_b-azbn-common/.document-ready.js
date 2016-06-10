$(function() {
	
	$('.bottom-bordered .bb-help').tooltip();
	
	$(document.body).on('click.azbn', '.b-azbn-diy-selfibot-container .youtube-btn', {}, function(event){
		event.preventDefault();
		
		var btn = $(this);
		var uid = btn.attr('data-youtube-uid');//href="https://www.youtube.com/embed/qo-35n1BBms"
		
		$('.b-azbn-modal-block .youtube-modal-video').attr('src', 'https://www.youtube.com/embed/' + uid);
		
	});
	
});