<?php
/**
 * Template Name: Default Form
 * Description: The default form template.
 */
?>
<!-- Strong Testimonials: Default Form Template -->
<div class="strong-view strong-form default-form <?php wpmtst_container_class(); ?>">

	<div id="wpmtst-form">

		<p class="required-notice">
			<span class="required symbol"></span><?php wpmtst_form_message( 'required-field' ); ?>
		</p>

		<form <?php wpmtst_form_info(); ?>>

			<?php wpmtst_form_setup(); ?>

			<?php do_action( 'wpmtst_form_before_fields' ); ?>

			<?php wpmtst_all_form_fields(); ?>

			<?php do_action( 'wpmtst_form_after_fields' ); ?>

			<?php wpmtst_form_submit_button(); ?>
			
			<?
			
			
			
			
			
			
			
			
			
			
 
function getPostImgUrl($id, $type='large') {
	$image_id = get_post_thumbnail_id($id);
	$image_url = wp_get_attachment_image_src($image_id, $type);
	return $image_url[0];
}
?>
<!-- Strong Testimonials default theme template -->

<style>
.form-field .imglist {
	
}

.wraptext-ti {
	height: 300px;
	overflow-y: hidden;
	position:relative;
}
.wraptext-ti:after {
	content:'';
	position:absolute;
	left:0;
	bottom:0;
	width:100%;
	height: 25px;
	box-shadow: inset 0px -15px 25px -15px rgba(30,30,30,0.05);
}
.wraptext-ti.full-ti {
	height: initial;
	overflow-y: initial;
	box-shadow:none;
}
.upload-img-preview {
	display:inline-block;
	height:50px;
	width:50px;
	background-repeat:no-repeat;
	background-position:center center;
	background-size:contain;
	margin:5px;
	outline:1px #cacaca solid;
}
#fe-editor-somefileuploader-hash {
	font-weight: normal!important;
	font-family: 'AmazingGroteskDemi'!important;
	font-size: 13px;
	padding: 0 0 8px;
	text-transform: uppercase;
	color:#8D8D8D;
	text-decoration:underline;
}
#fe-editor-somefileuploader {
	margin:25px 10px;
}
</style>

<script src="/wp-content/themes/L-tur/js/jquery.jqfeDropUploader.js"></script>
<script>
jQuery(document).ready(function(){
	
	var $ = jQuery;
	
	$('#fe-editor-somefileuploader').insertBefore($('input#wpmtst_submit_testimonial').parent());
	$('input[name="imglist"]').parent().hide();
	$('input[name="reviewresp"]').parent().hide();
	
	$('a.more-ti').on('click',function(event){
		event.preventDefault();
		$(this).prev('.wraptext-ti').addClass('full-ti');
		$(this).empty().remove();
	});
	
	$('#fe-editor-somefileuploader').jqfeDropUploader({
		action:'/wp-content/themes/L-tur/userimages/upload.ajax.php',
		name:'uploading_file',
		callback:function(file,response,counter){
			
			console.log(counter + ')' + file.name + ' загружен как ' + response);
			
			$('<div/>',{
				class:'upload-img-preview',
			})
			.css({
				'background-image':"url('" + response + "')",
			})
			.appendTo($('#fe-editor-somefileuploader-files'))
			;
			
			$('input[name="imglist"]').each(function(i){
				$(this).attr('value',$(this).attr('value') + response + ';');
			});
			
			$('#fe-editor-somefileuploader-hash').empty().remove();
			
			//alert(counter);
			//fe_insert_tag_<?=$uniq;?>('','<p><a href="'+response+'" >'+file.name+'</a></p>\n');
			//$('<p><a href="'+response+'" >'+file.name+'</a></p>').appendTo($('#fe-editor-somefileuploader-<?=$uniq;?>-files-list'));
			
		}
	});
	
});
</script>

<div class="form-field" id="fe-editor-somefileuploader" >
	<a href="fe-editor-somefileuploader-link" id="fe-editor-somefileuploader-hash" >Прикрепить изображения</a>
	<div id="fe-editor-somefileuploader-files" >
		<!-- <div class="upload-img-preview" style="background-image:url('')" ></div> -->
	</div>
</div>

<!--
<div class="fileinputs">
<div class="fakefile"><input value="ОБЗОР" disabled ></div>
<span class="load-text">Файл не выбран</span>
</div>
-->
			
			
			
			
			
			
			
			
			
			

		</form>
		
		<?php include(plugin_dir_path( __FILE__ ).'/templates/default/ti.php');?>

	</div>

</div>
