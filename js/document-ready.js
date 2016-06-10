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


	var url = window.location.pathname;
	$('.nav-block__link a[href="'+url+'"]').parent().addClass('active');
$(".arrow-slider").each(function(i){event.preventDefault();var e=$(this),t=e.find(".img-block .item"),r=(e.find(".text-content"),e.find(".title-block"),e.find(".arrow-block")),n=r.find(".point-line");t.each(function(i){$("<a/>",{"class":"item",html:'<span class="point" ></span>',href:"#image-"+i}).on("click.arrow-slider.point",function(i){console.log("click.arrow-slider.point");var e=$(this).index();n.find(".item").removeClass("active"),t.fadeOut("fast").removeClass("active"),$(this).addClass("active"),t.eq(e).fadeIn("fast").addClass("active")}).appendTo(n)}),r.on("click.arrow-slider.right",".btn-arrow.right",function(i){var e=n.find(".item"),t=e.filter(".active").eq(0).index(),r=e.eq(t).next(".item");r.size()?r.trigger("click"):e.eq(0).trigger("click")}),r.on("click.arrow-slider.left",".btn-arrow.left",function(i){var e=n.find(".item"),t=e.filter(".active").eq(0).index(),r=e.eq(t).prev(".item");r.size()?r.trigger("click"):e.eq(-1).trigger("click")}),e.hasClass("with-timer")&&e.data("fecss-timer",setInterval(function(){e.is(":hover")||r.find(".btn-arrow.right").trigger("click")},3e3)),n.find(".item.active").size()||n.find(".item").eq(0).trigger("click")});
$(document.body).on("click",".can-close .close-btn",function(c){c.preventDefault(),$(this).closest(".can-close").removeClass("active")});
$(".code-editable-block").each(function(e){var o=$(this),t=o.find(".code-name").eq(0),d=o.find(".code-value").eq(0),c=o.find(".code-status").eq(0);$(document.body).on("click.code-editable",".code-editable-block .code-btn.open",function(e){$.get("/pagebuilder/code-editable/open",{name:t.val()},function(e){d.text(e),c.text("opened")})}),$(document.body).on("click.code-editable",".code-editable-block .code-btn.save",function(e){$.post("/pagebuilder/code-editable/save",{name:t.val(),value:d.text()},function(e){c.text(e)})});var n=window.location.hash.substr(1);""!=n&&(t.val(n),o.find(".code-btn.open").trigger("click"))});
$(function(){var e="noname-browser",r=navigator.userAgent.toLowerCase();-1!=r.indexOf("msie")&&(e="msie"),-1!=r.indexOf("konqueror")&&(e="konqueror"),-1!=r.indexOf("firefox")&&(e="firefox"),-1!=r.indexOf("safari")&&(e="safari"),-1!=r.indexOf("chrome")&&(e="chrome"),-1!=r.indexOf("chromium")&&(e="chromium"),-1!=r.indexOf("opera")&&(e="opera"),-1!=r.indexOf("yabrowser")&&(e="yabrowser"),$("body.fecss").eq(0).addClass(e)});
$(document.ready).on("click",".go-to-top",function(o){o.preventDefault(),$("body").jqfeScrollTo({diff:0,speed:777})});
$(".line-gallery").each(function(e){event.preventDefault();var i=$(this);i.on("click.line-gallery.right",".btn-arrow.right",function(e){var t=i.find(".img-block .item"),n=t.filter(":visible");n.size()>1?(n.eq(0).hide().insertAfter(t.eq(-1)),n.eq(-1).next(".item").fadeIn("fast")):(n.eq(0).hide().insertAfter(t.eq(-1)),i.find(".img-block .item").eq(0).fadeIn("fast"))}),i.on("click.line-gallery.left",".btn-arrow.left",function(e){var t=i.find(".img-block .item"),n=t.filter(":visible");n.size()>1?(n.eq(-1).hide(),t.eq(-1).insertBefore(n.eq(0)).fadeIn("fast")):(n.eq(0).hide(),i.find(".img-block .item").eq(-1).insertBefore(i.find(".img-block .item").eq(0)).fadeIn("fast"))}),i.hasClass("with-timer")&&i.data("fecss-timer",setInterval(function(){i.is(":hover")||i.find(".btn-arrow.right").trigger("click")},3e3))});
$(".page-loader .close-loader").on("click",function(e){e.preventDefault(),$(".page-loader").removeClass("active")}),$(window).load(function(e){$(".page-loader").removeClass("active")});
$(".scrollto").on("click",function(e){e.preventDefault(),$($(this).attr("href")).eq(0).jqfeScrollTo({diff:0,speed:777})});
$(function(){$(".bottom-bordered .bb-help").tooltip(),$(document.body).on("click.azbn",".b-azbn-diy-selfibot-container .youtube-btn",{},function(t){t.preventDefault();var o=$(this),b=o.attr("data-youtube-uid");$(".b-azbn-modal-block .youtube-modal-video").attr("src","https://www.youtube.com/embed/"+b)})});
$(function(){var e,t=$(".b-azbn-diy-selfibot-container").eq(0),n=function(t){t?setTimeout(function(){e=!1},t):e=!1};n();var i=t.find(".fullscreen-content .b-azbn-slide").size();if(i){t.css({top:$(".b-top-header").outerHeight(!0)+$(".b-top-menu").outerHeight(!0)+"px"});var a=t.find(".fullscreen-content .content-pagination ul");a.empty(),t.find(".fullscreen-content .b-azbn-slide").each(function(e){var i=$(this),l=i.attr("data-slide-id");a.append('<li><a href="#-" data-slide-id="'+l+'" ></a></li>'),a.find("li a").on("click.azbn",function(e){e.preventDefault();var i=$(this),a=parseInt(i.attr("data-slide-id"));t.attr("data-slide-id",a),t.trigger("azbn.wheel",[{diff:0,next:a,callback:function(){n(451)}}])})}),$("#b-azbn-diy-selfibot-container-slide-count").html(i)}!t.size()||device.mobile()||device.tablet()||($(document.body).on("azbn.wheel",".b-azbn-diy-selfibot-container",{},function(e,t){e.preventDefault();var n=t.callback;9!=t.next&&1!=t.next&&$("#b-azbn-diy-selfibot-container-slide-id").html(t.next-1),n()}),$(document.body).on("click.azbn",".b-azbn-diy-selfibot-container .down-scroll-btn a",{},function(e){e.preventDefault();var i=parseInt(t.attr("data-slide-id")),a=i+1;t.attr("data-slide-id",a),t.trigger("azbn.wheel",[{diff:0,next:a,callback:function(){n(451)}}])}),$(document).on("wheel mousewheel DOMMouseScroll",function(i){if(i.preventDefault(),!e){e=!0;var a,l=i.originalEvent.wheelDelta,d=parseInt(t.attr("data-slide-id"));l>0?d>0?(a=d-1,t.attr("data-slide-id",a),t.trigger("azbn.wheel",[{diff:l,next:a,callback:function(){n(451)}}])):n():0>l&&9>d?(a=d+1,t.attr("data-slide-id",a),t.trigger("azbn.wheel",[{diff:l,next:a,callback:function(){n(451)}}])):n()}}))});
$(function(){var e=$(".b-azbn-diy-selfibot-container").eq(0);if(e.size()){var n=e.find('.fullscreen-content .b-azbn-slide[data-slide-id="8"] .congrat-iphone');$(document.body).on("azbn.setActive",'.b-azbn-diy-selfibot-container .fullscreen-content .b-azbn-slide[data-slide-id="8"] .congrat-iphone .iphone-screen',{},function(e){e.preventDefault();var t=$(this);t.addClass("active");var i=t.next(".iphone-screen");i.size()?$('.b-azbn-diy-selfibot-container .fullscreen-content .b-azbn-slide[data-slide-id="8"] .congrat-blurscreen').attr("style",i.attr("style")):$('.b-azbn-diy-selfibot-container .fullscreen-content .b-azbn-slide[data-slide-id="8"] .congrat-blurscreen').attr("style",n.find(".iphone-screen").eq(0).attr("style"))}),$(document.body).on("click",'.b-azbn-diy-selfibot-container .fullscreen-content .b-azbn-slide[data-slide-id="8"] .congrat-arrow',{},function(e){e.preventDefault();var t=n.find(".iphone-screen"),i=t.filter(".active");if(i.size()){var a=i.next(".iphone-screen");a.size()?(t.removeClass("active"),a.trigger("azbn.setActive")):(t.removeClass("active"),t.eq(0).trigger("azbn.setActive"))}else t.eq(0).trigger("azbn.setActive")}),$('.b-azbn-diy-selfibot-container .fullscreen-content .b-azbn-slide[data-slide-id="8"] .congrat-arrow').trigger("click")}});
$(".b-video-cont").each(function(t){event.preventDefault();var e=$(this),i=e.find(".list .item");i.on("click",function(t){t.preventDefault();var i=$(this),n=i.attr("href").slice(1);e.find(".player iframe").attr("src","https://www.youtube.com/embed/"+n)})});


$(window).on('resize',function(event){
	
	
	$(function(){var w={xs:{min:0,max:768},sm:{min:767,max:992},md:{min:991,max:1200},lg:{min:1199,max:1e4}},s="window-width",d=$(window).outerWidth(!0),i=$("body.fecss").eq(0);d<w.xs.max&&(i.hasClass("window-width-sm")&&i.removeClass("window-width-sm"),i.hasClass("window-width-md")&&i.removeClass("window-width-md"),i.hasClass("window-width-lg")&&i.removeClass("window-width-lg"),s="window-width-xs"),d>w.sm.min&&d<w.sm.max&&(i.hasClass("window-width-xs")&&i.removeClass("window-width-xs"),i.hasClass("window-width-md")&&i.removeClass("window-width-md"),i.hasClass("window-width-lg")&&i.removeClass("window-width-lg"),s="window-width-sm"),d>w.md.min&&d<w.md.max&&(i.hasClass("window-width-xs")&&i.removeClass("window-width-xs"),i.hasClass("window-width-sm")&&i.removeClass("window-width-sm"),i.hasClass("window-width-lg")&&i.removeClass("window-width-lg"),s="window-width-md"),d>w.lg.min&&(i.hasClass("window-width-xs")&&i.removeClass("window-width-xs"),i.hasClass("window-width-sm")&&i.removeClass("window-width-sm"),i.hasClass("window-width-md")&&i.removeClass("window-width-md"),s="window-width-lg"),$("body.fecss").eq(0).addClass(s)});


	
	
}).trigger('resize');


$(window).on('scroll',function(){

	
	$(function(){var a=$(document).scrollTop(),o=$(".go-to-top");o.hasClass("active")?200>a&&o.removeClass("active"):a>200&&o.addClass("active")});

	

}).trigger('scroll');


$('body').on('changeClass',function(){
	
	
	$(".line-gallery").each(function(a){event.preventDefault();var t=$(this),s=$("body").eq(0),i=3;s.hasClass("window-width-xs")?i=t.attr("data-xs-vis")||1:s.hasClass("window-width-sm")?i=t.attr("data-sm-vis")||2:s.hasClass("window-width-md")?i=t.attr("data-md-vis")||3:s.hasClass("window-width-lg")&&(i=t.attr("data-lg-vis")||3);for(var d=t.find(".img-block .item").hide(),e=0;i>e;e++)d.eq(e).fadeIn("fast")});

	
});


	


});