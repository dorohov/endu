<?

$groups = get_terms( array( 'azbnproduct_taxonomies', ), array(
	'hide_empty' => false,
	'fields' => 'all',
	//'parent' => '9',
));

if(count($groups)) {
	foreach($groups as $term) {
		// $term->slug $term->name
		
		$query = new WP_Query(array(
			'posts_per_page' => -1,
			'post_type' => 'azbnproduct',
			'tax_query' => array(array(
				'taxonomy' => 'azbnproduct_taxonomies',
				'field' => 'slug',
				'terms' => array(
					$term->slug,
				),
				//operator
				//include_children
			)),
		));
		
?>

<div id="productcat-<?=$term->slug;?>" class="_menuP__list-block _azbn_productcat-item_list ">
	
	
	<div id="productcat-<?=$term->slug;?>-scroll" class="scroll-hide _menuP__scroll-hide" >
		<div class="overflow-container scroll-element _menuP__scroll-element">
			<div class="overflowed scroll-overflow _menuP__scroll-overflow">
					<h3 class="_menuP__list-heading"><?=$term->name;?></h3>
					
					
				<?
				while ($query->have_posts()) {
					$query->the_post();
					$id = get_the_ID();
					$cost = get_field('cost', $id);
					$title = t($id);
					$c = c($id);
				?>
					
					
					<div class="_menuP__item jscart-item " data-jscart-product="<?=$id;?>" data-jscart-taste="0" data-jscart-cost="<?=$cost;?>" data-jscart-title="<?=$title;?>" ><!-- active -->
						<div class="_menuP__item-flex">
							<div class="_menuP__item-name">
								<span title="<?=$title;?>" ><?=$title;?> </span>
							</div>
							<div class="_menuP__item-cost"><?=$cost;?> руб.</div>
							<div class="_menuP__item-qty hidden-xs hidden-sm ">
								<span class="qty-minus _menuP__item-qty-btn scart-remove-btn " data-jscart-amount="1" >-</span>
								<span class="jscart-item-amount" >0</span>
								<span class="qty-plus _menuP__item-qty-btn jscart-add-btn " data-jscart-amount="1" >+</span>
							</div>
							<div class="_menuP__item-qty hidden-md hidden-lg jscart-add-btn " data-jscart-amount="1" >
								<span class="badge jscart-item-amount" >0</span>
							</div>
						</div>
						<?
						if($c != '') {
						?>
						<div class="_menuP__item-note"><?=c($id);?></div>
						<?
						}
						?>
					</div>
					
					
				<?
				}
				?>
					
					
			</div>
		</div>
	</div>
	
	
	<div class="scroll-container vertical right" data-target="#productcat-<?=$term->slug;?>-scroll" >
		<div class="scroll-line" >
			<div class="scroll" ></div>
		</div>
	</div>
	
	
</div>

<?
wp_reset_postdata();
	}
}