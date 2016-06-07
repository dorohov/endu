$(function() {
	
	var block = $('.b-azbn-diy-selfibot-container').eq(0);
	var scrolling;
	
	var can_scroll = function(timeout){
		if(timeout) {
			setTimeout(function(){
				scrolling = false;
			}, timeout);
		} else {
			scrolling = false;
		}
	};
	
	can_scroll();
	
	if(block.size() && !device.mobile() && !device.tablet()) {
		
		$(document.body).on('azbn.wheel', '.b-azbn-diy-selfibot-container', {}, function(event, obj){
			event.preventDefault();
			
			var cb = obj.callback;
			
			cb();
		});
		
		$(document).on("wheel mousewheel DOMMouseScroll", function(event) {
			event.preventDefault();
			//diff:event.originalEvent.wheelDelta
			
			if(scrolling) {
				
				return;
				
			} else {
				
				scrolling = true;
				//$(document.body).trigger('fecss.wheel-block.set', [{diff:event.originalEvent.wheelDelta}]);
				
				var diff = event.originalEvent.wheelDelta;
				//console.log(diff);
				var slide = parseInt(block.attr('data-slide-id'));
				//var now = slide;
				var next;
				
				if(diff > 0) {
					if(slide > 0) {
						next = slide - 1;
						block.attr('data-slide-id', next);
						block.trigger('azbn.wheel', [{diff:diff, next:next, callback:function(){
							can_scroll(300);
						}}]);
					} else {
						can_scroll();
					}
				} else if(diff < 0) {
					if(slide < 9) {
						next = slide + 1;
						block.attr('data-slide-id', next);
						block.trigger('azbn.wheel', [{diff:diff, next:next, callback:function(){
							can_scroll(300);
						}}]);
					} else {
						can_scroll();
					}
				} else {
					can_scroll();
				}
				
				//can_scroll();
				
			}
			
		});
		
	}
	
});