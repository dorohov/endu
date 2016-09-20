
/*
start .got-to-top document-ready
*/

$(document.body).on('click.fecss.goto-top', '.goto-top', function(event){
	event.preventDefault();
	
	$('html, body').animate({
		scrollTop : 0
	}, 777);
});

/*
end .got-to-top document-ready
*/
