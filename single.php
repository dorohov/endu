<?php get_header(); ?>

<div class="container">
	<div class="clearfix">
		<div class="row">
			<div class="wrapBlogContent single">
				
	    		<div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">  
					<div id="content" class="blogHolder">	
						<?php 
				                
						if (have_posts()) : while (have_posts()) : the_post(); 

							$postid = get_the_ID();
						
							// The following determines what the post format is and shows the correct file accordingly
							$format = get_post_format();
							get_template_part( 'includes/post-formats/'.$format );
							
							if($format == '')
							get_template_part( 'includes/post-formats/standard' ); ?>
							
							
							<?php //get_template_part( 'includes/post-formats/related-posts' ); ?>

							
						<?
						$img_arr = explode(';',wpmtst_get_field('imglist'));
						$reviewresp = wpmtst_get_field('reviewresp');
						?>
						<div class="imglist-cont" >
							<style>
								.imglist-cont {
									margin:2em 0;
									display:block;
									
								}
								.imglist-cont .photo-ti {
									max-width:100%;
								}
								
								.imglist-cont .photo-ti img {
									background-color:transparent;
									margin:10px 0;
									max-width:100%;
								}
								.reviewresp {
									margin:3em 0;
								}
								.reviewresp h3 {
									font-weight:bold;
									font-size:1.3em;
								}
								.reviewresp blockquote {
									margin:1em 0em 1em 4em;
									padding: 1em 1em 1em 3em;
									border:1px #999999 solid;
									border-left:9px #999999 solid;
									background-color:white;
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
						
						<?
						if($reviewresp != '') {
						?>
						<div class="reviewresp" >
							
							<h3>Ответ на отзыв</h3>
							<blockquote><?=$reviewresp;?></blockquote>
							
						</div>
						<?
						}
						?>
						

							<div class="postTagsCloud">Теги: <?php the_tags('', '', ''); ?></div> 	

							<div class="relatedPostNavigation">
								<p>
								<?php 

								$prev_post = get_previous_post();
								if ( !empty( $prev_post ) ) {
								  	echo '<a class="prevPostNav" href="'.get_permalink($prev_post->ID).'">'.$prev_post->post_title.'</a>';
								}

								$next_post = get_next_post();
								if ( !empty( $next_post ) ) { 
									echo '<a class="nextPostNav" href="'.get_permalink($next_post->ID).'">'.$next_post->post_title.'</a>';
								}

								?>
								</p>
							</div>

							<div id="userCommentHolder" class="clearfix">
								<?php 
                                $paged1 = (get_query_var('paged')) ? get_query_var('paged') : 1;
                                //Gather comments for a specific page/post 
                                $comments = get_comments(array(
                                    'post_id' => $postid,
                                    'number' => 2,
                                    'status' => 'approve' //Change this to the type of comments to be displayed
                                ));

                                if ( $comments ) echo '<h2>комментарии</h2>'; ?>

                                <ul class="userCommentList">
                                    <?php 

                                    //Display the list of comments
                                     wp_list_comments(array(
                                        'reverse_top_level' => false //Show the latest comments at the top of the list
                                    ), $comments);  ?>
                                            
                                </ul>
                            </div>

                            <div id="commentForm">
                            
                                <div id="respond">       
                                    <h2>Оставить комментарий:</h2>     
                                
                                    <?php echo '<form action="'.get_option('siteurl').'/wp-comments-post.php" method="post" id="commentform">';
                                
                                    echo '<p class="half first"><input type="text" name="author" id="author" value="'.$comment_author.'" size="22" tabindex="1" aria-required="true" placeholder="Ваше имя"/></p>';
                                    
                                    echo '<p class="half last"><input type="text" name="email" id="email" value="'.$comment_author_email.'" size="22" tabindex="2" aria-required="true" placeholder="Ваш e-mail" /></p>';      
                                
                                    echo '<p><textarea name="comment" id="comment" cols="100%" rows="10" tabindex="4" placeholder="Текст комментария"></textarea></p>';
                                    
                                    echo '<p class="warpSubmit"><input name="submit" type="submit" id="submit" tabindex="5" value="Отправить комментарий" /></p>';

                                    do_action( 'comment_form', $post->ID ); comment_id_fields();  ?>
                                
                                    </form>
                                </div>                                    
                            </div> 						    										
						
						<?php endwhile; endif; ?>
						    
					</div><!--#content-->					
				</div>
				<?php get_sidebar('blog'); ?>
				
			</div>	
		</div>	
	</div>
</div>
<?php get_footer(); ?>