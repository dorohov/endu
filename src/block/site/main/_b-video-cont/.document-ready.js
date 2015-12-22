
	$('.b-video-cont').each(function(index){
		event.preventDefault();
		
		var block = $(this);
		var items = block.find('.list .item');
		
		items.on('click', function(event){
			event.preventDefault();
			
			var btn = $(this);
			var hash = btn.attr('href').slice(1);
			
			block.find('.player iframe').attr('src', 'https://www.youtube.com/embed/' + hash);
			
		})
		
	});
	