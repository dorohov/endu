$(function() {
	
	//$('.bottom-bordered .bb-help').tooltip();
	
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
	
	
	var s_size = block.find('.fullscreen-content .b-azbn-slide').size();
	if(s_size && !screenJS.isXS() && !screenJS.isSM() && !device.mobile() && !device.tablet()) {
		
		block.css({
			top : ($('.b-top-header').outerHeight(true) + $('.b-top-menu').outerHeight(true)) + 'px',
		})
		
		var ul = block.find('.fullscreen-content .content-pagination ul');
		ul.empty();
		
		block.find('.fullscreen-content .b-azbn-slide').each(function(index){
			
			var s = $(this);
			var slide_id = s.attr('data-slide-id');
			
			ul.append('<li><a href="#-" data-slide-id="' + slide_id + '" ></a></li>');
			
			ul.find('li a').on('click.azbn', function(event){
				event.preventDefault();
				
				var btn = $(this);
				var next = parseInt(btn.attr('data-slide-id'));
				
				block.attr('data-slide-id', next);
				block.trigger('azbn.wheel', [{diff:0, next:next, callback:function(){
					can_scroll(451);
				}}]);
			})
			
		});
		
		$('#b-azbn-diy-selfibot-container-slide-count').html(s_size);
	}
	
	
	if(block.size() && !screenJS.isXS() && !screenJS.isSM() && !device.mobile() && !device.tablet()) {
		
		$(document.body).on('azbn.wheel', '.b-azbn-diy-selfibot-container', {}, function(event, obj){
			event.preventDefault();
			
			var cb = obj.callback;
			
			if(obj.next != 9 && obj.next != 1) {
				$('#b-azbn-diy-selfibot-container-slide-id').html(obj.next - 1);
			}
			
			
			if(obj.next == 0 || obj.next == 1) {
				//$('iframe#okplayer').get(0).stop();
			} else {
				
			}
			
			
			cb();
		});
		
		$(document.body).on('click.azbn', '.b-azbn-diy-selfibot-container .down-scroll-btn a', {}, function(event){
			event.preventDefault();
			
			var slide = parseInt(block.attr('data-slide-id'));
			var next = slide + 1;
			block.attr('data-slide-id', next);
			block.trigger('azbn.wheel', [{diff:0, next:next, callback:function(){
				can_scroll(451);
			}}]);
			
		});
		
		$(document.body).on("wheel mousewheel DOMMouseScroll MozMousePixelScroll", function(event) {
			event.preventDefault();
			//diff:event.originalEvent.wheelDelta
			
			if(scrolling) {
				
				return;
				
			} else {
				
				scrolling = true;
				//$(document.body).trigger('fecss.wheel-block.set', [{diff:event.originalEvent.wheelDelta}]);
				
				var diff = (-event.originalEvent.deltaY) || event.originalEvent.detail || event.originalEvent.wheelDelta;
				//console.log(diff);
				var slide = parseInt(block.attr('data-slide-id'));
				//var now = slide;
				var next;
				
				if(diff > 0) {
					if(slide > 0) {
						next = slide - 1;
						block.attr('data-slide-id', next);
						block.trigger('azbn.wheel', [{diff:diff, next:next, callback:function(){
							can_scroll(451);
						}}]);
					} else {
						can_scroll();
					}
				} else if(diff < 0) {
					if(slide < 9) {
						next = slide + 1;
						block.attr('data-slide-id', next);
						block.trigger('azbn.wheel', [{diff:diff, next:next, callback:function(){
							can_scroll(451);
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
		
	} else {
		
		
		
	}
	
});