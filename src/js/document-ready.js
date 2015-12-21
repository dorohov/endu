/*

$(document).ready(function() {

src/block/fecss/_fecss/.document-ready.js

src/block/fecss/_page-loader/.document-ready.js

src/block/fecss/_scrollto/.document-ready.js

src/block/fecss/_arrow-slider/.document-ready.js

src/block/fecss/_can-close/.document-ready.js



$(window).on('resize',function(event){
	
	block/fecss/.fecss/.window-resize.js
	
}).trigger('resize');



});

*/

$(document).ready(function() {


[snp tpl="src/_/concat.document-ready.js" ]


$(window).on('resize',function(event){
	
	
	[snp tpl="src/_/concat.window-resize.js" ]
	
	
}).trigger('resize');


$(window).on('scroll',function(){

	
	[snp tpl="src/_/concat.window-scroll.js" ]
	

}).trigger('scroll');


$('body').on('changeClass',function(){
	
	
	[snp tpl="src/_/concat.body.changeClass.js" ]

	
});


[snp tpl="src/_/concat.changeClass.js" ]


});