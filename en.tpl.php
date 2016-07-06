<?
$lng_id = 8;
?>
	
	<div class="fluid-block b-top-header" >
		<div class="adaptive-block grid grid-12 " >
			<div class="grid-row" >
				
				<div class="clmn-12 clmn-xs-12 clmn-sm-12 clmn-md-12 clmn-lg-12 " >
					<div class="logo-cont" >
						<a href="/en/" ><span class="logo" ></span></a>
					</div>
					
					<div class="contact-cont" >
						
						<div class="icon-cont" >
							<a class="item phone" href="tel:+<?=phone(get_field('soc-phone', $lng_id));?>" ><? the_field('soc-phone', $lng_id);?></a>
							<a class="item fb " href="<? the_field('soc-fb', $lng_id);?>" ></a>
							<a class="item twi " href="<? the_field('soc-twi', $lng_id);?>" ></a>
							<a class="item inst " href="<? the_field('soc-inst', $lng_id);?>" ></a>
							<a class="item lnkin " href="<? the_field('soc-linked', $lng_id);?>" ></a>
						</div>
						
						<div class="lang-cont" >
							<a class="item ru <?if($this->lng == 'ru'){echo 'active';}?> " href="http://old.endurancerobots.com/about-endurance-3/" >Ru</a><!-- <?=changeLang('ru');?> -->
							<a class="item en <?if($this->lng == 'en'){echo 'active';}?> " href="<?=changeLang('en');?>" >En</a>
						</div>
						
					</div>
				</div>
				
				<div class="clear" ></div>
			
			</div>
		</div>
	</div>
	
	
	
	<div class="fluid-block b-top-menu" >
		<div class="adaptive-block grid grid-12 " >
			<div class="grid-row" >
				
				<div class="clmn-12 clmn-xs-12 clmn-sm-12 clmn-md-12 clmn-lg-12 " >
					<div class="menu d-t" >
						<div class="d-t-r menu-for-search " >
							<div class="d-t-c " >
								<div class="hoverdown" >
									<a class="link" href="#link" >About</a>
									<div class="viewonhover" >
										<ul>
											<li><a class="link" href="<?=l(29);?>" >Team</a></li>
											<li><a class="link" href="<?=l(25);?>">Offices and locations</a></li>
											<li><a class="link" href="<?=l(16);?>">Contacts</a></li>
											<li><a class="link" href="<?=l(33);?>" >Job openings</a></li>
											<li><a class="link" href="<?=l(21);?>" >Calendar</a></li>
											<!--
											<li><a class="link" href="http://endurancerobots.com/about-endurance-3/socialnye-seti/" >Социальные сети</a></li>
											<li><a class="link" href="http://endurancerobots.com/about-endurance-3/podpisatsya/" >Подписаться</a></li>
											-->
											<!--
											<li><a class="link" href="http://endurancerobots.com/about-endurance-3/video/" >Видео</a></li>
											-->
											
										</ul>
									</div>
								</div>
								
							</div>
							<div class="d-t-c" >							
								<div class="hoverdown" >
									<a class="link" href="#link" >Robots</a>
									<div class="viewonhover" >
										<ul>
											<?
											$query = new WP_Query(array(
												'post_type' => 'page',
												'post_parent' => 114,
												'order' => 'ASC',
												'orderby'=>'menu_order',
											));
											
											while ($query->have_posts()) {
												$query->the_post();
												$id = get_the_ID();
												if($id != 4046) {
											?>
											
											<li><a class="link" href="<?=l($id);?>" ><?=get_the_title($id);?></a></li>
											
											<?
												}
											}
											
											wp_reset_postdata();
											?>
										</ul>
									</div>
								</div>
								
							</div>
							<div class="d-t-c " >
								
								<div class="hoverdown" >
									<a class="link" href="#link" >Lasers</a>
									<div class="viewonhover" >
										<ul>
											<?
											$query = new WP_Query(array(
												'post_type' => 'page',
												'post_parent' => 112,
												'order' => 'ASC',
												'orderby'=>'menu_order',
											));
											
											while ($query->have_posts()) {
												$query->the_post();
												$id = get_the_ID();
											?>
											
											<li><a class="link" href="<?=l($id);?>" ><?=get_the_title($id);?></a></li>
											
											<?
											}
											
											wp_reset_postdata();
											?>
										</ul>
									</div>
								</div>
								
							</div>
							<div class="d-t-c" >
								<a class="link" href="<?=l(1300);?>" >Consulting</a>
							</div>
							<div class="d-t-c" >
								<a class="link" href="<?=l(1302);?>" >Investor</a>
							</div>
							
							<div class="d-t-c" >
								<a class="link" href="<?=l(1292);?>" >Video</a>
							</div>
							
							<div class="d-t-c" >
								<a class="link" href="<?=l(16);?>" >Contact</a>
							</div>
							<div class="d-t-c search-form-btn" >
								<a class="" href="#link" ><span class="search-icon" ></span></a>
								
								<div class="search-form-cont" >
									<form action="<?php bloginfo('url'); ?>" method="get">
										<input type="text" name="s" placeholder="Search" value=""/>
										<input type="submit" value="Find"/>
									</form>
								</div>
							</div>
							<style>
							.search-form-btn {
								position:relative;
							}
							.search-form-btn .search-form-cont {
								position:absolute;
								right:0;
								width:240px;
								opacity:0;
								background-color: #0962ac;
								bottom: -100px;
								width: 300px;
								padding: 20px;
							}
							.search-form-btn .search-form-cont form {
								
							}
							.search-form-btn .search-form-cont form input[type="text"] {    
								font-size: 14px;
								color: black;
								padding: 5px;
								border: 2px solid #ccc;							
							}
							.search-form-btn .search-form-cont form input[type="submit"] {
								    font-size: 14px;
									background: white;
									border: 1px solid #ccc;
									color: black;
									padding: 6px 10px;
							}
							</style>
						</div>
					</div>
				</div>
				
				<div class="clear" ></div>
			
			</div>
		</div>
	</div>
	