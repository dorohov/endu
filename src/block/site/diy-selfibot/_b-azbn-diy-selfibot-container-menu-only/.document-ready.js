$(function() {
	
	//$('.bottom-bordered .bb-help').tooltip();
	
	var block = $('.b-azbn-diy-selfibot-container-menu-only').eq(0);
	
	
	$(document.body).on('click.azbn', '.b-azbnmaterial-page-menu a[data-btntarget="menu"]', {}, function(event){
		event.preventDefault();
		
		block.attr('data-slide-id', 2);
		block.find('.content-menu-cont').addClass('active');
	});
	
	$(document.body).on('click.azbn', '.b-azbn-diy-selfibot-container-menu-only .content-menu-cont .content-menu', {}, function(event){
		event.preventDefault();
		
		block.attr('data-slide-id', 0);
	});
	
	/*
	if(block.size() && !screenJS.isXS() && !screenJS.isSM() && !device.mobile() && !device.tablet()) {
		
		
		
	} else {
		
		
		
	}
	*/
	
});