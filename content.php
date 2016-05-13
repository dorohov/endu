<?php
/**
 * Template Name: Default
 * Description: The default template.
 */
?>
<!-- Strong Testimonials: Default Template -->
<div class="strong-view default <?php wpmtst_container_class(); ?>">
	<div class="strong-content <?php wpmtst_content_class(); ?>">

		<?php
		while ( $query->have_posts() ) : $query->the_post();
		$img_arr = explode(';',wpmtst_get_field('imglist'));
		?>
			<div class="<?php wpmtst_post_class(); ?>">
				<div class="testimonial-inner">
					<?php wpmtst_the_title( '<h3 class="testimonial-heading">', '</h3>' ); ?>
					<div class="testimonial-content">
						<?php wpmtst_the_thumbnail(); ?>
						<div class="maybe-clear"></div>
						<?php wpmtst_the_content(); ?>
						
						<div class="imglist-cont" >
						<style>
							.imglist-cont {
								margin:2em 0;
								display:block;
								
							}
							.imglist-cont .photo-ti {
								display:inline-block;
								max-width:36%;
							}
							
							.imglist-cont .photo-ti img {
								max-height:200px;
								max-width:100%;
								background-color:transparent;
								margin:10px 0;
							}
						</style>
						<?
						if(count($img_arr) > 1) {
						//<div class="mes-ti">В отзыве прикреплены фотографии</div>
							if(count($img_arr)) {
								foreach($img_arr as $img) {
							
									if($img != '') {
							?>
							<div class="photo-ti">
							<?php
							//the_post_thumbnail();
								echo '<img src="'.$img.'" />';
							?>
							</div>
							<?php
								}
							
								}
							}
							
						}
						?>
						</div>
						
					</div>
					<div class="testimonial-client">
						<?php wpmtst_the_client(); ?>
					</div>
					<?php wpmtst_read_more(); ?>
					<div class="clear"></div>
				</div>
			</div>
		<?php endwhile; ?>

	</div>
</div>
