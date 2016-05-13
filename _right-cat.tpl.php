<?

// устанавливаем фильтр
/*
add_filter('get_terms_orderby', 'sort_terms_clause', 10, 3);
function sort_terms_clause( $orderby, $args, $taxonomies ){
	return 't.slug+0';
}
*/

$groups = get_terms( array( 'azbnproduct_taxonomies', ), array(
	'hide_empty' => false,
	'fields' => 'all',
	//'parent' => '9',
));

/*
// удаляем фильтр
remove_filter('get_terms_orderby', 'sort_terms_clause', 10);
*/

if(count($groups)) {
?>
<div class="_menuP__navbar _azbn_jscart-step _azbn_menu_main_list " data-jscart-step="0" >
	<button type="button" class="btn-menu visible-sm" data-dismiss="modal"></button>
	
	<div id="overflow-nav" class="scroll-hide _menuP__scroll-hide scroll-recalc " >
		<div class="overflow-container scroll-element _menuP__scroll-element">
			<div class="overflowed scroll-overflow _menuP__scroll-overflow">
				
				<?
				/*
				<ul>
				<?
				foreach($groups as $term) {
					if($term->slug == 'pivo') {
						$url = l(24);
						$gtc = '';
					} else {
						$url = '#productcat-'.$term->slug;
						$gtc = 'go-to-cat';
					}
					?>
					<li class="_azbn_productcat-switch <?=$gtc;?>" ><a href="<?=$url;?>" ><?=$term->name;?></a></li>
					<?
				}
				?>
				</ul>
				*/
				?>
				<ul>
					<li class="_azbn_productcat-switch go-to-cat"><a href="#productcat-barnaya-karta">Барная карта</a></li>
					<li class="_azbn_productcat-switch"><a href="<?=l(24);?>">Пиво</a></li>
					<li class="_azbn_productcat-switch go-to-cat"><a href="#productcat-gril">Гриль</a></li>
					<li class="_azbn_productcat-switch go-to-cat"><a href="#productcat-zakuski-k-pivu">Закуски к пиву</a></li>
					<li class="_azbn_productcat-switch go-to-cat"><a href="#productcat-holodnyie-zakuski">Холодные закуски</a></li>
					<li class="_azbn_productcat-switch go-to-cat"><a href="#productcat-salatyi">Салаты</a></li>
					<li class="_azbn_productcat-switch go-to-cat"><a href="#productcat-goryachie-zakuski">Горячие закуски</a></li>
					<li class="_azbn_productcat-switch go-to-cat"><a href="#productcat-supyi">Супы</a></li>
					<li class="_azbn_productcat-switch go-to-cat"><a href="#productcat-ryibnyie-goryachie-blyuda">Рыбные горячие блюда</a></li>
					<li class="_azbn_productcat-switch go-to-cat"><a href="#productcat-myasnyie-goryachie-blyuda">Мясные горячие блюда</a></li>
					<li class="_azbn_productcat-switch go-to-cat"><a href="#productcat-kolbaski">Колбаски</a></li>
					<li class="_azbn_productcat-switch go-to-cat"><a href="#productcat-pasta">Паста</a></li>
					<li class="_azbn_productcat-switch go-to-cat"><a href="#productcat-garniryi">Гарниры</a></li>
					<li class="_azbn_productcat-switch go-to-cat"><a href="#productcat-svezhevyipechennyiy-hleb">Свежевыпеченный хлеб</a></li>
					<li class="_azbn_productcat-switch go-to-cat"><a href="#productcat-desertyi">Десерты</a></li>
					<li class="_azbn_productcat-switch go-to-cat"><a href="#productcat-napitki">Напитки</a></li>
				</ul>
				
			</div>
		</div>
	</div>
	
	<div class="scroll-container vertical right " data-target="#overflow-nav" >
		<div class="scroll-line" >
			<div class="scroll" ></div> 
		</div>
	</div>
	
</div>
<?

}