$(function() {
	
	var block = $('.b-azbn-diy-selfibot-container').eq(0);
	
	if(block.size()) {
		var iphone = block.find('.fullscreen-content .b-azbn-slide[data-slide-id="8"] .congrat-iphone');
		var selfibot = block.find('.fullscreen-content .b-azbn-slide[data-slide-id="8"] .congrat-selfibot');
		
		$(document.body).on('azbn.setActive', '.b-azbn-diy-selfibot-container .fullscreen-content .b-azbn-slide[data-slide-id="8"] .congrat-iphone .iphone-screen', {}, function(event){
			event.preventDefault();
			
			var el = $(this);
			el.addClass('active');
			
			var next = el.next('.iphone-screen');
			if(next.size()) {
				
				$('.b-azbn-diy-selfibot-container .fullscreen-content .b-azbn-slide[data-slide-id="8"] .congrat-iphone-cont .congrat-blurscreen')
					.attr('style', next.attr('style'));
				
			} else {
				
				$('.b-azbn-diy-selfibot-container .fullscreen-content .b-azbn-slide[data-slide-id="8"] .congrat-iphone-cont .congrat-blurscreen')
					.attr('style', iphone.find('.iphone-screen').eq(0).attr('style'));
				
			}
			
		});
		
		$(document.body).on('azbn.setActive', '.b-azbn-diy-selfibot-container .fullscreen-content .b-azbn-slide[data-slide-id="8"] .congrat-selfibot .selfibot-screen', {}, function(event){
			event.preventDefault();
			
			var el = $(this);
			el.addClass('active');
			
			var next = el.next('.selfibot-screen');
			if(next.size()) {
				
				$('.b-azbn-diy-selfibot-container .fullscreen-content .b-azbn-slide[data-slide-id="8"] .congrat-selfibot-cont .congrat-blurscreen')
					.attr('style', next.attr('style'));
				
			} else {
				
				$('.b-azbn-diy-selfibot-container .fullscreen-content .b-azbn-slide[data-slide-id="8"] .congrat-selfibot-cont .congrat-blurscreen')
					.attr('style', selfibot.find('.selfibot-screen').eq(0).attr('style'));
				
			}
			
		});
		
		
		
		
		$(document.body).on('click', '.b-azbn-diy-selfibot-container .fullscreen-content .b-azbn-slide[data-slide-id="8"] .congrat-arrow', {}, function(event){
			event.preventDefault();
			
			var screens = iphone.find('.iphone-screen');
			var active = screens.filter('.active');
			
			if(active.size()) {
				
				var next = active.next('.iphone-screen');
				if(next.size()) {
					
					screens.removeClass('active');
					next.trigger('azbn.setActive');
					
				} else {
					
					screens.removeClass('active');
					screens.eq(0).trigger('azbn.setActive');
					
				}
				
			} else {
				
				screens.eq(0).trigger('azbn.setActive');
				
			}
			
		});
		$('.b-azbn-diy-selfibot-container .fullscreen-content .b-azbn-slide[data-slide-id="8"] .congrat-arrow').trigger('click');
		
		
		
		
		$(document.body).on('click', '.b-azbn-diy-selfibot-container .fullscreen-content .b-azbn-slide[data-slide-id="8"] .congrat-arrow2', {}, function(event){
			event.preventDefault();
			
			var screens = selfibot.find('.selfibot-screen');
			var active = screens.filter('.active');
			
			if(active.size()) {
				
				var next = active.next('.selfibot-screen');
				if(next.size()) {
					
					screens.removeClass('active');
					next.trigger('azbn.setActive');
					
				} else {
					
					screens.removeClass('active');
					screens.eq(0).trigger('azbn.setActive');
					
				}
				
			} else {
				
				screens.eq(0).trigger('azbn.setActive');
				
			}
			
		});
		$('.b-azbn-diy-selfibot-container .fullscreen-content .b-azbn-slide[data-slide-id="8"] .congrat-arrow2').trigger('click');
	
	}
	
});