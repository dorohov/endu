<meta charset="utf-8" >

<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<title>
<?
if(is_category()) {
	single_cat_title();
} else {
	//$title = get_field($this->lng.'-title');
	if($title != '') {
		echo $title;
		//wp_title('');
	} else {
		//the_title();
		wp_title('');
	}
}
?>
</title>

<meta name='yandex-verification' content='634b2fcbde88c293' />

<meta HTTP-EQUIV="Cache-Control" content="no-cache" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<link type="image/x-icon" href="/favicon.ico" rel="shortcut icon" />
<link type="image/x-icon" href="/favicon.ico" rel="icon" />

<link href="<?php echo $this->path('css');?>/site.css?update=<?=date("Ymd");?>" rel="stylesheet">
<link href="<?php echo $this->path('css');?>/bootstrap/bootstrap.css" rel="stylesheet">
<link href="<?php echo $this->path('css');?>/tables-styles.css" rel="stylesheet">

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->

<script src="<?php echo $this->path('js');?>/device.min.js" ></script>
<script src="https://yastatic.net/jquery/2.1.4/jquery.min.js"></script>
<script>
if(typeof window.jQuery === 'undefined') {
	document.write(
	unescape("%3Cscript src='<?php echo $this->path('js');?>/jquery.min.js' type='text/javascript'%3E%3C/script%3E")
	);
}
</script>

<script src="<?php echo $this->path('js');?>/bootstrap.min.js" ></script>
<script src="<?php echo $this->path('js');?>/storage.js" ></script>

<script src="<?php echo $this->path('js');?>/jquery-plugin/jquery.jqfeChangeClassEvent.js" ></script>
<script src="<?php echo $this->path('js');?>/jquery-plugin/jquery.jqfeScrollTo.js" ></script>
<script src="<?php echo $this->path('js');?>/jquery-plugin/okvideo.js" ></script>

<script src="<?php echo $this->path('js');?>/document-ready.js?update=<?=date("Ymd");?>" ></script>

<script>
	$(document).ready(function() {
		$('img').addClass('img-responsive');
		var url = window.location.pathname;
		$('.navbar-nav a[href="'+url+'"]').parent().addClass('active');
		$('.carousel .item').eq('0').addClass('active');
		
		
		
		
		$('a[href="http://endurancerobots.com/en/robots/diy-selfiebot/"]').attr('href', 'http://endurancerobots.com/en/robots/diy-selfiebot-mobile/');
		
		
		
		
		$('.search-form-btn').on('click', function(event){
			
			if($(this).hasClass('active')) {
				$('.menu-for-search .search-form-cont').animate({opacity:0,});
				$(this).removeClass('active');
			} else {
				$('.menu-for-search .search-form-cont').animate({opacity:1,}).find('form input[type="text"]').focus();
				$(this).addClass('active')
			}
			
		});
		
		
		$('.questionnaire-cb').each(function(index){
			
			var cb = $(this);
			var form = cb.closest('form');
			var div = form.find('button[type="submit"]').parent();
			
			cb.on('click.azbn', function(event){
				//event.preventDefault();
				
				if(cb.prop('checked')) {
					div.fadeIn('fast');
				} else {
					div.fadeOut('fast');
				}
			});
			
			cb.trigger('click.azbn').trigger('click.azbn');
			
		});
		
		
		$('#buy-diy-selfibot').each(function(index){
			
			var block = $(this);
			//alert('123');
			
			var recalc = function() {
				var p = block.find('#__calc_product');
				var c = block.find('#__calc_count');
				var s = block.find('#__calc_subs[data-can-calc="1"]');
				var sp = block.find('#__calc_subsper[data-can-calc="1"]'); 
				
				if(s.size() && sp.size()) {
					
					var d = {
						_p : parseFloat(p.find('option:selected').eq(0).attr('data-calc')),
						_c : parseInt(c.val()),
						_s : parseFloat(s.attr('data-calc')),
						_sp : parseFloat(sp.attr('data-calc')),
					};
					
					console.log(d);
					
					var sum = (d._p * d._c) + (d._s * d._sp);
					
					block.find('#form-total-sum').val(sum + '$');
					block.find('#form-total-sum-span').html(sum + '$');
					
				} else {
					
				}
			};
			block.find('input[type="radio"]').on('click', function(){
				var el = $(this);
				var name = el.attr('name');
				block.find('input[name="' + name + '"]').attr('data-can-calc', 0);
				el.attr('data-can-calc', 1);
			});
			block.find('input').on('click blur keyup change', function(){
				//var el = $(this);
				
				recalc();
			});
			block.find('select').on('click blur keyup change', function(){
				//var sel=$(this);
				//var opt=sel.find('option:selected').eq(0);
				
				recalc();
			});
		});
		
		
		$('.azbnmaterial-content iframe')
			.attr('width', '100%')
			.attr('height', '400px')
		;
		
	});
</script>


<link  href="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.3/fotorama.css" rel="stylesheet"> <!-- 3 KB -->
<script src="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.3/fotorama.js"></script> <!-- 16 KB -->



<style>
#questionnaire-list li a {
	display:inline-block;
	transition:all 0.5s ease;
	padding:1em 2em;
	margin-right:2em;
	background-color:#004178;
	border-radius:3px;
	color:white;
	text-decoration:none;
}
#questionnaire-list li.active a {
	background-color:white;
	color:#004178;
}
#questionnaire .modal__form div, #buy-diy-selfibot .modal__form div {
	margin:1.5em 0;
}

.page-id-2717 .b-azbn-diy-selfibot-container .content-menu-cont .menu-list li a[data-post-id="3591"],
.page-id-2717 .b-azbn-diy-selfibot-container .content-menu-cont .menu-list li a[data-post-id="3651"]
{
	font-weight:bold;
}
</style>



<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit&hl=en" async defer></script>
<script type="text/javascript">
var onloadCallback = function() {
	var mysitekey = '6LcgoyMTAAAAAOPqif1Mgy3VSnkDNCMEDYHGnWd9';
	
	grecaptcha.render('g-recaptcha-1', {
		'sitekey' : mysitekey
	});
	grecaptcha.render('g-recaptcha-2', {
		'sitekey' : mysitekey
	});
	grecaptcha.render('g-recaptcha-3', {
		'sitekey' : mysitekey
	});
	
	/*
	grecaptcha.render('recaptcha2', {
		'sitekey' : mysitekey,
		'theme' : 'light', //default - light
		'type' : 'image', //default - image
		'size' : 'compact', //default - normal
		'tabindex' : 0, //default - 0
		'callback' : , //function on success
		'expired-callback' : //function when response expires
	});
	*/
};
//onloadCallback();
</script>