var ShowAlert = function(title, text, cb) {
	$('body').jqfeInfoMsg({html:text,showtime:4500});
};

$(document).ready(function() {
	
	$(function(){
		
		var __msg = $('body').eq(0).attr('data-msg') || '';
		
		if(__msg != '') {
			ShowAlert('',__msg,function(){});
		}
		
	});
	
	
	$('._azbn__galleryP__lock-btn').on('click.fecss', function(event){
		event.preventDefault();
		
		var btn = $(this);
		btn.closest('._galleryP__lock').css({
			//'opacity':0,
			'opacity':1,
			'transition':'opacity 0.7s ease',
		})
			.delay(100)
			//.hide('fast')
			.css({'opacity':0,})
			.delay(100)
			.empty()
			.remove()
			;
		
		SS.set('._azbn__galleryP__lock-btn', true);
		
		$('button._galleryP__btn-panel').trigger('click');
	});
	
	
	$(document.body).on('click.fecss', 'button._galleryP__btn-panel', function(event){
		event.preventDefault();
		
		$(this).closest('._galleryP__carousel').toggleClass('__close __open');
	});
	
	
	$('._azbn_gallery-item').on('click.fecss', function(event){
		event.preventDefault();
		
		var btn = $(this);
		var img = btn.find('img').attr('src');
		
		//btn.closest('.owl-wrapper').find('.owl-item').removeClass('active');
		//btn.closest('.owl-item').addClass('active');
		$('.item._azbn_gallery-item').removeClass('active');
		btn.addClass('active');
		
		$('._azbn_gallery-full-image').css({
			'background-image':'url(' + img + ')',
			'background-position' : 'center center',
			'background-size' : 'cover',
			'transition':'all 0.4s ease',
		});
		
		var new_pos = 0;
		
		var item = btn.parent();
		var pos = item.position().left;
		var mediana = item.outerWidth(true) / 2;
		
		
		var wrapper = btn.closest('.owl-wrapper');
		var items = wrapper.find('.owl-item');
		var wrapper_outer_width = wrapper.parent().outerWidth(true);
		
		
		var item_index = wrapper.find('.owl-item').index(item);
		//console.log(item_index + ',' + items.size());
		
		
		var last_pos = items.eq(-1).position().left;
		var last_right = last_pos + items.eq(-1).outerWidth(true);
		
		
		var k = Math.ceil(last_right / wrapper_outer_width);
		
		
		wrapper.css({'transition' : 'all 0.7s ease'});
		
		
		
		if((pos + mediana) > wrapper_outer_width) {
			
			if((k * wrapper_outer_width) > pos + mediana) {
				
				new_pos = last_right - wrapper_outer_width;
				
			} else {
				
				new_pos = pos;
				
			}
			
		} else {
			
			new_pos = 0;
			
		}
		
		wrapper
			.css({'transform' : 'translateX(-' + new_pos + 'px)'})
			.attr('data-owl-pos', new_pos);
		
	});
	
	
	if(SS.get('._azbn__galleryP__lock-btn')) {
		$('._azbn__galleryP__lock-btn').trigger('click');
	} else {
		setTimeout(function(){
			$('._azbn__galleryP__lock-btn').trigger('click');
		}, 3000);
	}
	
	
	
	
	
	/*
	$(document.body).on('click.fecss', '._azbn_click-on-document-ready', function(event){
		event.preventDefault();
		
		if($('._azbn_jscart-step[data-jscart-step="0"]').is(':visible')) {
			$('._azbn_jscart-step[data-jscart-step="0"]').fadeOut('fast');
		} else {
			$('._azbn_jscart-step[data-jscart-step="0"]').fadeIn('fast').css({'display':'flex',});
			$('._azbn_jscart-step[data-jscart-step="0"]').find('.scroll-container').trigger('init');
		}
		
		
	});
	*/
	
	$(function(){
		
		$('._azbn_jscart-step[data-jscart-step="0"]').fadeIn('fast').css({'display':'flex',});
		$('._azbn_jscart-step[data-jscart-step="0"]').find('.scroll-container').trigger('init');
		
	});
	
	
	
	$(function(){
		
		$(document.body).on('submit', 'form.send-call-req', function(event){
			event.preventDefault();
			
			var f = $(this);
			
			var ph = f.find('input[name="phone"]').val();
			
			var r1 = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
			
			if(ph != '' && r1.test(ph)) {
				
				var order = {
					action : 'azbnajax_call',
					method : 'call/create',
					type:'json',
					phone : ph,
				};
				
				//order = JSON.stringify(order);
				
				$.post('/wp-admin/admin-ajax.php', order, function(data){
					//alert('Заявка добавлена');
					
					ShowAlert('','Ваша заявка принята. Наши администраторы перезвонят Вам для уточнения ее деталей',function(){});
					
					f.find('input[name="phone"]').val('');
					f.closest('.modal').find('.btn-order[data-dismiss="modal"]').trigger('click');
				});
				
			} else {
				
				ShowAlert('','Введите номер телефона в общепринятом формате, он не должен быть пустым',function(){});
				
			}
			
			
		});
		
	});
	
	
	
	$(document.body).on('click.fecss', '._azbn_backUp', function(event){
		event.preventDefault();
		
		//$.fn.fullpage.moveSectionUp();
		$.fn.fullpage.moveTo(1);
	})
	
	
	
	$(function(){
		//._azbn_gallery-ctrl-left
		//._azbn_gallery-ctrl-right
		
		//$('#owl-demo').owlCarousel();
		var owl = $('#owl-demo.owl-carousel');//.data('owlCarousel');
		
		if(owl.size()) {
			
			$(document.body).on('click.fecss', '._azbn_gallery-ctrl-left', function(event){
				event.preventDefault();
				
				//owl.prev();
				
				var prev = $('.item._azbn_gallery-item.active').parent().prev('.owl-item');
				if(prev.size()) {
					prev.find('.item._azbn_gallery-item').trigger('click.fecss');
				} else {
					$('.owl-item').eq(-1).find('.item._azbn_gallery-item').trigger('click.fecss');
				}
			});
			
			$(document.body).on('click.fecss', '._azbn_gallery-ctrl-right', function(event){
				event.preventDefault();
				
				//owl.next();
				
				var next = $('.item._azbn_gallery-item.active').parent().next('.owl-item');
				if(next.size()) {
					next.find('.item._azbn_gallery-item').trigger('click.fecss');
				} else {
					$('.owl-item').eq(0).find('.item._azbn_gallery-item').trigger('click.fecss');
				}
			});
			
			$(document.body).on('fecss.keydown',		null, {}, function(event, _event) {
				console.log('body trigger:fecss.keydown: ' + JSON.stringify(_event));
				
				if(_event.key == 37) {
					
					$('._azbn_gallery-ctrl-left').trigger('click.fecss');
					
				} else if(_event.key == 39) {
					
					$('._azbn_gallery-ctrl-right').trigger('click.fecss');
					
				}
			});
			
			$(document.body).bind('keydown', function(event){
				event.stopPropagation();
				
				$(document.body).trigger('fecss.keydown', [{
					alt : event.altKey,
					ctrl : event.ctrlKey,
					shift : event.shiftKey,
					meta : event.metaKey,
					key : event.which,
					liter : String.fromCharCode(event.which),
				}]);
			});
		}
		
	});
	
	
	
	$('._azbn_productcat-switch a').on('click', function(event){
		event.preventDefault();
		
		var btn = $(this);
		var target = btn.attr('href');
		
		if(btn.parent().hasClass('go-to-cat')) {
			$('._azbn_productcat-item_list').hide();
			
			var block = $(target + '._azbn_productcat-item_list');
			
			block.fadeIn('fast');
			
			btn.closest('ul').find('._azbn_productcat-switch').removeClass('active');
			btn.parent().addClass('active');
			
			$(target + ' .scroll-container').delay(1000).trigger('init');
		} else {
			location.href = target;
		}
		
		//$('._ps__inside-line._sgg__inside-line._menuP__modal-content').closest('.menu-modal__section').fadeOut();
		
	}).eq(0).trigger('click');
	
	
	$('._azbn_jscart-step-next').on('click', function(event){
		event.preventDefault();
		
		var btn = $(this);
		var step = btn.attr('data-jscart-step');
		
		if(device.mobile() || device.tablet()) {
			
		} else {
			$('._azbn_jscart-step').hide();
		}
		
		$('._azbn_jscart-step[data-jscart-step="' + step + '"]').fadeIn('fast').find('.scroll-container').trigger('init');
		
	});
	
	
	$('._azbn_jscart-step-next[data-jscart-step="1"]').on('click', function(event){
		event.preventDefault();
		
		$('.fecss-jscart').trigger('rebuild-editor');
		
	});
	
	
	$('._azbn_jscart-step-next[data-jscart-step="1"], ._azbn_jscart-step-next[data-jscart-step="2"]').on('click', function(event){
		event.preventDefault();
		
		$('body').addClass('open-dev');
		
	});
	
	$('._azbn_jscart-step-next[data-jscart-step="0"], ._azbn_jscart-step-next[data-jscart-step="3"]').on('click', function(event){
		event.preventDefault();
		
		$('body').removeClass('open-dev');
		
	});
	
	
	$('._azbn_jscart-step').hide();
	//$('._azbn_jscart-step[data-jscart-step="0"]').fadeIn('fast').css({'display':'flex',});
	
	//$('._azbn_click-on-document-ready').eq(0).trigger('click');_azbn_menu_main_list
	
	$('._menuP__item.jscart-item').hover(function(){
			$(this).addClass('active');
		}, function(){
			$(this).removeClass('active');
		}
	);
	
	
	
	
	
	
	$('._azbn_contact-form-block').hide();
	$('._azbn_contact-form-block ._azbn_cancel').on('click', function(event){
		event.preventDefault();
		
		$('body').removeClass('open-rev');
		$('._azbn_contact-form-block').fadeOut('fast');
	});
	$('._azbn_contact-get-form').on('click', function(event){
		event.preventDefault();
		
		$('body').toggleClass('open-rev');
		if($('._azbn_contact-form-block').is(':hidden')) {
			$('._azbn_contact-form-block').fadeIn('fast').css({'display':'flex'});
		} else {
			$('._azbn_contact-form-block').fadeOut('fast');
		}
		
	});
	
	
	$('._azbn_contact-form').on('submit', function(event){
		event.preventDefault();
		
		var res = 0;
		var res_txt = '';
		
		var f = $(this);
		
		var name = f.find('input[name="contact-name"]').val();
		var email = f.find('input[name="contact-email"]').val();
		var msg = f.find('input[name="contact-msg"]').val();
		
		if(name != '') {
			res++;
		} else {
			res_txt = 'Введите Ваше имя. Пустое значение не принимается';
		}
		
		var re1 = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
		//var re2 = /^\d[\d\(\)\ -\+]{4,14}\d$/;
		if(email != '' || (re1.test(email))) {//email.indexOf('@') > 0 || || re2.test(email)
			res++;
		} else {
			res_txt = 'Введите корректный email';
		}
		
		if(msg != '') {
			res++;
		} else {
			res_txt = 'Введите текст сообщения';
		}
		
		if(res == 3) {
			
			var order = $.extend(
				{
					
				},
				{
					action : 'azbnajax_call',
					method : 'contact/create',
					type:'json',
				},
				{
					name : name,
					email : email,
					msg : msg,
				}
			);
			
			$.post('/wp-admin/admin-ajax.php', {}, function(data){
				//alert('Данные отправлены');
				
				ShowAlert('','Данные отправлены. Наши администраторы свяжутся с Вами',function(){});
				
				f.trigger('reset');
				f.closest('.modal').find('.btn-order[data-dismiss="modal"]').trigger('click');
			});
			
		} else {
			
			ShowAlert('', res_txt, function(){});
			
		}
		
	});
	$('._azbn_contact-form-btn').on('click.azbn', function(event){
		event.preventDefault();
		
		$('._azbn_contact-form').trigger('submit');
	});
	
	
	
	$('._azbn_vacancy-form-cont').hide();
	$('._azbn_vacancy-form-cont ._azbn_cancel').on('click', function(event){
		event.preventDefault();
		
		$('body').removeClass('open-rev');
		$('._azbn_vacancy-form-cont').fadeOut('fast');
	});
	$('._azbn_vacancy-get-form').on('click', function(event){
		event.preventDefault();
		
		$('body').toggleClass('open-rev');
		if($('._azbn_vacancy-form-cont').is(':hidden')) {
			$('._azbn_vacancy-form-cont').fadeIn('fast').css({'display':'flex'});
		} else {
			$('._azbn_vacancy-form-cont').fadeOut('fast');
		}
		
	});

	
	$(function(){
		
		$(document.body).on('submit', 'form.vacancy-form', function(event){
			event.preventDefault();
			
			var f = $(this);
			
			var order = $.extend(
				{
					
				},
				{
					action : 'azbnajax_call',
					method : 'vacancy/create',
					type:'json',
				},
				f.serialize()
			);
				
				//order = JSON.stringify(order);
				
				$.post('/wp-admin/admin-ajax.php', order, function(data){
					//alert('Данные отправлены');
					
					ShowAlert('','Данные отправлены. Наши администраторы свяжутся с Вами после рассмотрения резюме',function(){});
					
					f.trigger('reset');
					f.closest('.modal').find('.btn-order[data-dismiss="modal"]').trigger('click');
				});
		});
		
	});
	
	
	
	$('.fecss-jscart').each(function(){
		
		var block = $(this);
		
		var Cart = new jsCart();
		
		block.on('rebuild', null, {}, function(event, p){
			
			block.find('.jscart-item').each(function(index){
				
				var item = $(this);
				
				var product = item.attr('data-jscart-product');
				var taste = item.attr('data-jscart-taste');
				//var cost = item.attr('data-jscart-cost');
				//var amount = item.attr('data-jscart-amount');
				
				var c_item = Cart.getItem(product, taste);
				
				var _c_i_amonut = parseInt(c_item.amount);
				
				if(_c_i_amonut) {
					item.find('input.jscart-item-amount').attr('value', _c_i_amonut);
					item.find('div.jscart-item-amount, span.jscart-item-amount, a.jscart-item-amount').html(_c_i_amonut);
				} else {
					item.find('input.jscart-item-amount').attr('value', 0);
					
					if(device.mobile() || device.tablet()) {
						item.find('div.jscart-item-amount, span.jscart-item-amount, a.jscart-item-amount').html('').empty();
					} else {
						item.find('div.jscart-item-amount, span.jscart-item-amount, a.jscart-item-amount').html(_c_i_amonut);
					}
					
				}
				
				
				
				var result = Cart.calculate();
				block.attr('data-jscart-sum', result.sum).find('.jscart-sum').html(result.sum);
				block.find('.jscart-product').html(result.product);
				block.find('.jscart-amount').html(result.amount);
				
				var amount_o = result.amount % 10;
				var amount_o_str = '';
				switch(amount_o) {
					
					case 1:{
						amount_o_str = 'о';
					}
					break;
					
					case 2:
					case 3:
					case 4:{
						amount_o_str = 'а';
					}
					break;
					
					default:{
						amount_o_str = '';
					}
				}
				
				if(result.amount > 9 && result.amount < 21) {
					amount_o_str = '';
				}
				
				block.find('.jscart-suffix').html(amount_o_str);
			});
			
			if(p.rebuild_editor) {
				block.trigger('rebuild-editor');
			}
		});
		block.trigger('rebuild', [{rebuild_editor : false,}]);
		
		
		block.on('rebuild-editor', function(event){
			
			var tpl = $('._azbn-jscart-editor-item-tpl').eq(0).html();
			$('._azbn_jscart-edit-order').empty();
			Cart.saveCart(function(profile, cart){
				
				if(cart != null) {
					
				} else {
					cart = {};
				}
				
				for(var p_key in cart) {
					var product = cart[p_key];
					for(var t_key in product) {
						var taste = product[t_key];
						//result.product++;
						//result.amount = result.amount + taste.amount;
						//result.sum = result.sum + (taste.amount * taste.cost);
						
						var p = {
							id : p_key,
							title : $('._azbn_productcat-item_list .jscart-item[data-jscart-product="' + p_key + '"]').attr('data-jscart-title'),
							amount : taste.amount,
							cost : taste.cost,
						};
						
						var html = tpl;
						
						for(var _k in p) {
							html = html.replace(new RegExp('%' + _k + '%','ig'), p[_k]);
						}
						
						$('._azbn_jscart-edit-order').append(html);
						
					}
				}
				
			});
			
		});
		//block.trigger('rebuild-editor');
		
		block.on('clear', function(event){
			Cart.clear();
			block.trigger('rebuild', [{rebuild_editor : false,}]);
		});
		
		block.on('create-order', function(event){
			
			var profile = Cart.getProfile({});
			
			if(profile) {
				
			} else {
				profile = {};
			}
			profile.phone = $('._azbn_jscart-order-phone').eq(0).val();
			
			var r1 = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
			
			if(profile.phone != '' && r1.test(profile.phone)) {
				
				Cart.setProfile(profile);
				
				Cart.saveCart(function(profile, cart){
					
					var order = {
						action : 'azbnajax_call',
						method : 'order/create',
						type:'json',
						profile : profile,
						cart : cart,
					};
					
					//order = JSON.stringify(order);
					
					$.post('/wp-admin/admin-ajax.php', order, function(data){
						
						var neworder = JSON.parse(data);
						Cart.saveOrder(neworder);
						
						//Cart.clear();
						//block.trigger('rebuild');
						
						$('._azbn_jscart-order-phone').eq(0).val('');
						$('._azbn_jscart-step-next[data-jscart-step="0"]').eq(0).trigger('click');
						ShowAlert('','Заказ принят. Наши администраторы свяжутся с Вами для подтверждения заказа',function(){});
						
						block.trigger('clear');
					});
					
				})
				
			} else {
				
				ShowAlert('','Для заказа необходимо ввести номер телефона',function(){});
				
			}
			
		});
		
		
		$(document.body).on('mousemove', '.editDev__item', function(event){
			event.preventDefault();
			
			$(this).addClass('active');
		});
		
		$(document.body).on('mouseleave', '.editDev__item', function(event){
			event.preventDefault();
			
			$(this).removeClass('active');
		});
		
		
		$(document.body).on('click.jscart', '.jscart-item .jscart-add-btn', function(event){
			event.preventDefault();
			
			var btn = $(this);
			
			var product = btn.attr('data-jscart-product');
			var taste = btn.attr('data-jscart-taste');
			var cost = btn.attr('data-jscart-cost');
			var amount = btn.attr('data-jscart-amount');
			
			if(product == '' || typeof product == 'underfined' || product == null) {
				product = btn.closest('.jscart-item').attr('data-jscart-product');
			}
			if(taste == '' || typeof taste == 'underfined' || taste == null) {
				taste = btn.closest('.jscart-item').attr('data-jscart-taste');
			}
			if(cost == '' || typeof cost == 'underfined' || cost == null) {
				cost = btn.closest('.jscart-item').attr('data-jscart-cost');
			}
			if(amount == '' || typeof amount == 'underfined' || amount == null || amount == 0) {
				amount = btn.closest('.jscart-item').attr('data-jscart-amount');
			}
			
			Cart.add(product, taste, cost, parseInt(amount));
			console.log('product ' + product + ' added to cart');
			
			var p = {rebuild_editor : false,};
			if(btn.closest('_azbn_jscart-edit-order')) {
				p.rebuild_editor = true;
			}
			block.trigger('rebuild', [p]);
		});
		
		$(document.body).on('click.jscart', '.jscart-item .jscart-remove-btn', function(event){
			event.preventDefault();
			
			var btn = $(this);
			
			var product = btn.attr('data-jscart-product');
			var taste = btn.attr('data-jscart-taste');
			var cost = btn.attr('data-jscart-cost');
			var amount = btn.attr('data-jscart-amount');
			
			if(product == '' || typeof product == 'underfined' || product == null) {
				product = btn.closest('.jscart-item').attr('data-jscart-product');
			}
			if(taste == '' || typeof taste == 'underfined' || taste == null) {
				taste = btn.closest('.jscart-item').attr('data-jscart-taste');
			}
			if(cost == '' || typeof cost == 'underfined' || cost == null) {
				cost = btn.closest('.jscart-item').attr('data-jscart-cost');
			}
			if(amount == '' || typeof amount == 'underfined' || amount == null || amount == 0) {
				amount = btn.closest('.jscart-item').attr('data-jscart-amount');
			}
			
			Cart.remove(product, taste, parseInt(amount));
			console.log('product ' + product + ' removed from cart');
			
			var p = {rebuild_editor : false,};
			if(btn.closest('_azbn_jscart-edit-order')) {
				p.rebuild_editor = true;
			}
			block.trigger('rebuild', [p]);
		});
		
		$(document.body).on('click.jscart', '.jscart-item .jscart-remove-pos', function(event){
			event.preventDefault();
			
			var btn = $(this);
			
			var product = btn.attr('data-jscart-product');
			var taste = btn.attr('data-jscart-taste');
			
			if(product == '' || typeof product == 'underfined' || product == null) {
				product = btn.closest('.jscart-item').attr('data-jscart-product');
			}
			if(taste == '' || typeof taste == 'underfined' || taste == null) {
				taste = btn.closest('.jscart-item').attr('data-jscart-taste');
			}
			
			Cart.remove(product, taste, 99999999);
			console.log('product ' + product + ' removed from cart');
			
			var p = {rebuild_editor : false,};
			if(btn.closest('_azbn_jscart-edit-order')) {
				p.rebuild_editor = true;
			}
			block.trigger('rebuild', [p]);
		});
		
		$(document.body).on('click.jscart', '.jscart-clear-btn', function(event){
			event.preventDefault();
			block.trigger('clear');
		});
		
		$(document.body).on('click.jscart', '.jscart-create-order', function(event){
			event.preventDefault();
			block.trigger('create-order');
		});
		
	});
	
	
	
	
	
	
	
	
	$(function(){
		var pl = $('div.page-loader.full-screen.chester-style.active');
		var b = $('.blind', pl).eq(0);
		
		if(b.size()) {
			
			var pos = 0;
			
			b.css({'bottom' : pos + '%'}).attr('data-pos', pos);
			
			var intr = setInterval(function() {
				
				var check = Math.random();
				if(check > 0.5 && pos < 100) {
					pos++;
					
					if(b.data('fast-page-loading')) {
						pos = pos + 6;
					}
					
					var h = 100 + (pos);
					//var o = (100 - (pos / 5.5)) / 100;
					
					b.css({'bottom' : pos + '%', 'height' : h + '%', 'width' : h + '%', 'left' : - (pos / 2) + '%'}).attr('data-pos', pos);//, 'height' : h + '%'
				} else if(pos > 99) {
					clearInterval(intr);
					$('div.page-loader.full-screen.chester-style')
						.data('counter-can-close-it', true)
						.trigger('fecss.can-close-it');
				}
				
			}, 55);
		}
	});
	
	
	
	
	
	$('._azbn_news-archive-open').on('click', function(event){
		event.preventDefault();
		
		var btn = $(this);
		$('._azbn_news-archive').fadeIn('fast');
		
	});
	
	$('._azbn_news-archive-close').on('click', function(event){
		event.preventDefault();
		
		var btn = $(this);
		$('._azbn_news-archive').fadeOut('fast');
		
	}).eq(0).trigger('click');
	
	
	$(window).on('resize', function(event){
		
		
		if(device.mobile()) {
			
			$('._azbn_news-archive-list').css({width : 'auto'});
			
			$('._azbn_news-archive .scroll-container').removeClass('horizontal bottom').addClass('vertical right').trigger('init');
			
		} else {
			
			$('._azbn_news-archive-list').css({width : 'auto'});
			
			var _azbn_news_archive_list_w = 0;
			$('._azbn_news-archive-list ._azbn_news-archive-item').each(function(){
				_azbn_news_archive_list_w = _azbn_news_archive_list_w + $(this).outerWidth(true);
			});
			$('._azbn_news-archive-list').css({width : _azbn_news_archive_list_w});
			
			$('._azbn_news-archive .scroll-container').removeClass('vertical right').addClass('horizontal bottom').trigger('init');
		}
		
		if(device.mobile() || device.tablet()) {
			$('._azbn_menu-order-delivery-block').hide();
		} else {
			$('._azbn_menu-order-delivery-block').show();
		}
		
	});
	$(window).trigger('resize');
	
	
});