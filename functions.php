<?php

// Функции темы

add_theme_support('post-thumbnails');

function getAzbnController($config=array()) {
	global $Azbn;
	if(isset($Azbn)) {
		
	} else {
		include('azbn.ru/AzbnController.class.php');
		//include('azbn.ru/AzbnAjax.class.php');
		$Azbn = new AzbnController($config);
	}
}
getAzbnController(array());
$Azbn->setPath(get_bloginfo('template_directory'));

$Azbn->setAjax();

$Azbn->setShortcodes();

$Azbn->setImgs();
$Azbn->Imgs->setImgSizes(array(
	'100x100crop' => array(
		'w' => 100,
		'h' => 100,
		'crop' => true,
	),
	'news-preview' => array(
		'w' => 390,
		'h' => 350,
		'crop' => true,
	),
	'product' => array(
		'w' => 1000,
		'h' => 1000,
		'crop' => true,
	),
));

function __azbn_set_category_for_pages() {
	register_taxonomy(
		'page-category',
		'page',
		array(
			'hierarchical' => true,
			'label' => 'Рубрики страниц',
		)
	);
}
add_action('init', '__azbn_set_category_for_pages');


add_action('init', 'chesterpub_init_session', 1);
if(!function_exists('chesterpub_init_session')) {
	function chesterpub_init_session() {
		session_start();
	}
}









function l($id) {
	return get_permalink($id);
}

function t($id) {
	return get_the_title($id);
}

function phone($str) {
	return preg_replace('/[^0-9]/', '', $str);
}

function c($post_id) {
	$page_data = get_page($post_id);
	if ($page_data) {
		return apply_filters('the_content', $page_data->post_content);
	} else {
		return false;
	}
}

function d2r($date) {
	$month = array("january"=>"января", "february"=>"февраля", "march"=>"марта", "april"=>"апреля", "may"=>"мая", "june"=>"июня", "july"=>"июля", "august"=>"августа", "september"=>"сентября", "october"=>"октября", "november"=>"ноября", "december"=>"декабря");
	$days = array("monday"=>"Понедельник", "tuesday"=>"Вторник", "wednesday"=>"Среда", "thursday"=>"Четверг", "friday"=>"Пятница", "saturday"=>"Суббота", "sunday"=>"Воскресенье");
	return str_replace(array_merge(array_keys($month), array_keys($days)), array_merge($month, $days), mb_strtolower($date, 'UTF-8'));
}

/*
function enqueue_styles() {
	wp_enqueue_style( 'whitesquare-style', get_stylesheet_uri());
	wp_register_style('font-style', 'http://fonts.googleapis.com/css?family=Oswald:400,300');
	wp_enqueue_style( 'font-style');
}
add_action('wp_enqueue_scripts', 'enqueue_styles');

function enqueue_scripts () {
	wp_register_script('html5-shim', 'http://html5shim.googlecode.com/svn/trunk/html5.js');
	wp_enqueue_script('html5-shim');
}
add_action('wp_enqueue_scripts', 'enqueue_scripts');
*/


/*
function new_excerpt_length($length){
	return 15;
}
add_filter('excerpt_length', 'new_excerpt_length');

function new_excerpt_more($more) {
	return '...';
}
add_filter('excerpt_more', 'new_excerpt_more');




function shortStr($str,$len=77) {
	$str = strip_tags($str);
	$str = strtr($str,array("\t"=>'',"\n"=>'',"\r"=>'',"    "=>' ',"   "=>' ',"  "=>' ',));
	return mb_substr($str, 0, $len, 'UTF-8').'…';
}

function getPostImgUrl($id,$size='large') {
	$image_id = get_post_thumbnail_id($id);
	$image_url = wp_get_attachment_image_src($image_id, $size);
	return $image_url[0];
}
*/



function pagination($wp_query, $pages = '', $range = 10)
{
	$showitems = ($range * 2)+1;
	global $paged;
	if(empty($paged)) $paged = 1;
	if($pages == '') {
		//global $wp_query;
		$pages = $wp_query->max_num_pages;
		if(!$pages) {
			$pages = 1;
		}
	}
	if(1 != $pages) {
		echo "<div class=\"pagination\"><span>Страница ".$paged." из ".$pages."</span>";
		if($paged > 2 && $paged > $range+1 && $showitems < $pages) echo "<a href='".get_pagenum_link(1)."'>&laquo; First</a>";
		if($paged > 1 && $showitems < $pages) echo "<a href='".get_pagenum_link($paged - 1)."'>&lsaquo; Previous</a>";
		for ($i=1; $i <= $pages; $i++) {
			if (1 != $pages &&( !($i >= $paged+$range+1 || $i <= $paged-$range-1) || $pages <= $showitems )) {
				echo ($paged == $i)? "<span class=\"current\">".$i."</span>":"<a href='".get_pagenum_link($i)."' class=\"inactive\">".$i."</a>";
			}
		}
		if ($paged < $pages && $showitems < $pages) echo "<a href=\"".get_pagenum_link($paged + 1)."\">Next &rsaquo;</a>";
		if ($paged < $pages-1 &&  $paged+$range-1 < $pages && $showitems < $pages) echo "<a href='".get_pagenum_link($pages)."'>Last &raquo;</a>";
		echo "</div>\n";
	}
}






function __theme_posttype_azbnproduct() {
		$labels = array(
			'name' => 'Блюда меню',
			'singular_name' => 'блюдо',
			'add_new' => 'Добавить блюдо',
			'add_new_item' => 'Добавить новое блюдо',
			'edit_item' => 'Редактировать блюдо',
			'new_item' => 'Новое блюдо',
			'view_item' => 'Посмотреть блюдо',
			'search_items' => 'Найти блюдо',
			'not_found' =>	'Блюд не найдено',
			'not_found_in_trash' => 'В корзине блюд не найдено',
			'parent_item_colon' => '',
			'menu_name' => 'Блюда'
		);
		$args = array(
			'labels' => $labels,
			//'public' => true,
			//'publicly_queryable' => true,
			'show_ui' => true,
			'show_in_menu' => true,
			'query_var' => true,
			'rewrite' => true,
			'capability_type' => 'page',
			'has_archive' => true,
			'hierarchical' => false,
			'menu_position' => 15,
			'supports' => array('title', 'editor', 'thumbnail', 'revisions', 'page-attributes'), //'custom-fields'
		'taxonomies' => array('azbnproduct_taxonomies') 
		);
		register_post_type('azbnproduct',$args);	
}

function __theme_create_posttype_azbnproduct_taxonomies() {
		$labels = array(
			'name' => _x( 'Разделы меню', 'taxonomy general name' ),
			'singular_name' => _x( 'Раздел меню', 'taxonomy singular name' ),
			'search_items' =>	__( 'Найти раздел меню' ),
			'all_items' => __( 'Все разделы меню' ),
			'parent_item' => __( 'Родительский раздел меню' ),
			'parent_item_colon' => __( 'Родительский раздел' ),
			'edit_item' => __( 'Родительский раздел меню' ),
			'update_item' => __( 'Обновить раздел меню' ),
			'add_new_item' => __( 'Добавить раздел меню' ),
			'new_item_name' => __( 'Название раздела меню' ),
			'menu_name' => __( 'Разделы меню' ),
		);

		register_taxonomy('azbnproduct_taxonomies', array('azbnproduct'), array(
			'hierarchical' => true,
			'labels' => $labels,
			'show_ui' => true,
			'query_var' => true,
			'rewrite' => array( 'slug' => 'azbnproducts' ),
		));
}

add_action('init', '__theme_posttype_azbnproduct');
add_action('init', '__theme_create_posttype_azbnproduct_taxonomies');


function __theme_posttype_azbnorder() {
		$labels = array(
			'name' => 'Заказы',
			'singular_name' => 'заказ',
			'add_new' => 'Добавить заказ',
			'add_new_item' => 'Добавить новый заказ',
			'edit_item' => 'Редактировать заказ',
			'new_item' => 'Новый заказ',
			'view_item' => 'Посмотреть заказ',
			'search_items' => 'Найти заказ',
			'not_found' =>	'Заказов не найдено',
			'not_found_in_trash' => 'В корзине заказов не найдено',
			'parent_item_colon' => '',
			'menu_name' => 'Заказы'
		);
		$args = array(
			'labels' => $labels,
			//'public' => true,
			//'publicly_queryable' => true,
			'show_ui' => true,
			'show_in_menu' => true,
			'query_var' => true,
			'rewrite' => true,
			'capability_type' => 'page',
			'has_archive' => true,
			'hierarchical' => false,
			'menu_position' => 16,
			'supports' => array('title', 'editor', ), //'custom-fields'
		//'taxonomies' => array('azbnproduct_taxonomies') 
		);
		register_post_type('azbnorder',$args);	
}

add_action('init', '__theme_posttype_azbnorder');






function azbn_get_archives( $args = '' ) {
	global $wpdb, $wp_locale;

	$defaults = array(
		'type' => 'monthly',
		'limit' => '',
		'show_post_count' => false,
		'order' => 'DESC',
		'post_type' => 'post'
	);

	$r = wp_parse_args( $args, $defaults );

	$post_type_object = get_post_type_object( $r['post_type'] );
	
	if ( ! is_post_type_viewable( $post_type_object ) ) {
		return;
	}
	
	$r['post_type'] = $post_type_object->name;

	if ( '' == $r['type'] ) {
		$r['type'] = 'monthly';
	}

	if ( ! empty( $r['limit'] ) ) {
		$r['limit'] = absint( $r['limit'] );
		$r['limit'] = ' LIMIT ' . $r['limit'];
	}

	$order = strtoupper( $r['order'] );
	if ( $order !== 'ASC' ) {
		$order = 'DESC';
	}

	$archive_week_separator = '&#8211;';

	$archive_date_format_over_ride = 0;

	$archive_day_date_format = 'Y/m/d';

	$archive_week_start_date_format = 'Y/m/d';
	$archive_week_end_date_format	= 'Y/m/d';

	if (!$archive_date_format_over_ride ) {
		$archive_day_date_format = get_option( 'date_format' );
		$archive_week_start_date_format = get_option( 'date_format' );
		$archive_week_end_date_format = get_option( 'date_format' );
	}
	
	$sql_where = $wpdb->prepare( "WHERE post_type = %s AND post_status = 'publish'", $r['post_type'] );
	
	$where = apply_filters( 'getarchives_where', $sql_where, $r );
	
	$join = apply_filters( 'getarchives_join', '', $r );

	$output = '';
	
	$result_arr = array();

	$last_changed = wp_cache_get( 'last_changed', 'posts' );
	if ( ! $last_changed ) {
		$last_changed = microtime();
		wp_cache_set( 'last_changed', $last_changed, 'posts' );
	}

	$limit = $r['limit'];
	
	switch($r['type']) {
		
		
		case 'yearly': {
			$query = "SELECT YEAR(post_date) AS `year`, count(ID) as posts FROM $wpdb->posts $join $where GROUP BY YEAR(post_date) ORDER BY post_date $order $limit";
			$key = md5( $query );
			$key = "wp_get_archives:$key:$last_changed";
			if ( ! $results = wp_cache_get( $key, 'posts' ) ) {
				$results = $wpdb->get_results( $query );
				wp_cache_set( $key, $results, 'posts' );
			}
			if ( $results ) {
				
				foreach ( (array) $results as $result) {
					$url = get_year_link( $result->year );
					if ( 'post' !== $r['post_type'] ) {
						$url = add_query_arg( 'post_type', $r['post_type'], $url );
					}
					$text = sprintf( '%d', $result->year );
					
					$result_arr[] = array(
						'link' => $url,
						'title' => $text,
						'count' => $result->posts,
						'item' => $result,
					);
				}
			}
		}
		break;
		
		
		case 'daily': {
			$query = "SELECT YEAR(post_date) AS `year`, MONTH(post_date) AS `month`, DAYOFMONTH(post_date) AS `dayofmonth`, count(ID) as posts FROM $wpdb->posts $join $where GROUP BY YEAR(post_date), MONTH(post_date), DAYOFMONTH(post_date) ORDER BY post_date $order $limit";
			$key = md5( $query );
			$key = "wp_get_archives:$key:$last_changed";
			if ( ! $results = wp_cache_get( $key, 'posts' ) ) {
				$results = $wpdb->get_results( $query );
				wp_cache_set( $key, $results, 'posts' );
			}
			if ( $results ) {
				
				foreach ( (array) $results as $result ) {
					$url  = get_day_link( $result->year, $result->month, $result->dayofmonth );
					if ( 'post' !== $r['post_type'] ) {
						$url = add_query_arg( 'post_type', $r['post_type'], $url );
					}
					$date = sprintf( '%1$d-%2$02d-%3$02d 00:00:00', $result->year, $result->month, $result->dayofmonth );
					$text = mysql2date( $archive_day_date_format, $date );
					
					$result_arr[] = array(
						'link' => $url,
						'title' => $text,
						'count' => $result->posts,
						'item' => $result,
					);
				}
			}
		}
		break;
		
		
		case 'weekly': {
			$week = _wp_mysql_week( '`post_date`' );
			$query = "SELECT DISTINCT $week AS `week`, YEAR( `post_date` ) AS `yr`, DATE_FORMAT( `post_date`, '%Y-%m-%d' ) AS `yyyymmdd`, count( `ID` ) AS `posts` FROM `$wpdb->posts` $join $where GROUP BY $week, YEAR( `post_date` ) ORDER BY `post_date` $order $limit";
			$key = md5( $query );
			$key = "wp_get_archives:$key:$last_changed";
			if ( ! $results = wp_cache_get( $key, 'posts' ) ) {
				$results = $wpdb->get_results( $query );
				wp_cache_set( $key, $results, 'posts' );
			}
			$arc_w_last = '';
			if ( $results ) {
				
				foreach ( (array) $results as $result ) {
					if ( $result->week != $arc_w_last ) {
						$arc_year       = $result->yr;
						$arc_w_last     = $result->week;
						$arc_week       = get_weekstartend( $result->yyyymmdd, get_option( 'start_of_week' ) );
						$arc_week_start = date_i18n( $archive_week_start_date_format, $arc_week['start'] );
						$arc_week_end   = date_i18n( $archive_week_end_date_format, $arc_week['end'] );
						$url            = sprintf( '%1$s/%2$s%3$sm%4$s%5$s%6$sw%7$s%8$d', home_url(), '', '?', '=', $arc_year, '&amp;', '=', $result->week );
						if ( 'post' !== $r['post_type'] ) {
							$url = add_query_arg( 'post_type', $r['post_type'], $url );
						}
						$text           = $arc_week_start . $archive_week_separator . $arc_week_end;
						
						$result_arr[] = array(
							'link' => $url,
							'title' => $text,
							'count' => $result->posts,
							'item' => $result,
						);
					}
				}
			}
		}
		break;
		
		
		case 'monthly':
		default: {
			
			$query = "SELECT YEAR(post_date) AS `year`, MONTH(post_date) AS `month`, count(ID) as posts FROM $wpdb->posts $join $where GROUP BY YEAR(post_date), MONTH(post_date) ORDER BY post_date $order $limit";
			$key = md5( $query );
			$key = "wp_get_archives:$key:$last_changed";
			if ( ! $results = wp_cache_get( $key, 'posts' ) ) {
				$results = $wpdb->get_results( $query );
				wp_cache_set( $key, $results, 'posts' );
			}
			if ( $results ) {
				
				foreach ( (array) $results as $result ) {
					$url = get_month_link( $result->year, $result->month );
					if ( 'post' !== $r['post_type'] ) {
						$url = add_query_arg( 'post_type', $r['post_type'], $url );
					}
					
					$text = sprintf( __( '%1$s %2$d' ), $wp_locale->get_month( $result->month ), $result->year );
					
					$result_arr[] = array(
						'link' => $url,
						'title' => $text,
						'count' => $result->posts,
						'item' => $result,
					);
				}
			}
			
		}
		break;
		
	}
	
	return $result_arr;
}


function vacancy_get_post() {

$abs_path = '/wp-content/themes/azbnbasetheme/';

//var_dump($_POST);die();

if(count($_FILES)) {
	$uploadfile = 'upload/'.basename($_FILES['file']['name']);
	
	if(move_uploaded_file($_FILES['file']['tmp_name'], './..'.$abs_path.$uploadfile)) {
		
		
		
		$html = '';
		$name = htmlspecialchars(trim($_POST['name']), ENT_QUOTES, 'UTF-8');
		$email = htmlspecialchars(trim($_POST['email']), ENT_QUOTES, 'UTF-8');
		$msg = htmlspecialchars(trim($_POST['msg']), ENT_QUOTES, 'UTF-8');
		
		$html = $html . '<p>На сайте оставили резюме</p>';
		$html = $html . '<p>Имя: '.$name.'</p>';
		$html = $html . '<p>Email: '.$email.'</p>';
		$html = $html . '<p>Текст сообщения: '.$msg.'</p>';
		$html = $html . '<p>Прикрепленный файл: http://chesterpub.ru'.$abs_path.$uploadfile.'</p>';
		
		$post_data = array(
			'post_type'			=>	'azbnorder',
			'post_title'		=>	wp_strip_all_tags('Новое резюме на сайте '.date("Y-m-d H:i:s", date("U") + 10800)),
			'post_content'		=>	$html,//serialize($order),
			'post_status'		=>	'pending',
			'post_author'		=>	1,
			'comment_status'	=>	'closed',
			'ping_status'		=>	'closed',
			//'post_date'			=>	date("Y-m-d H:i:s"),
			//'post_category'	=>	array( 8,39 ),
		);
		$post_id = wp_insert_post($post_data);
		
		
		if($post_id) {
			
			$headers = array();
			$headers[] = 'From: Сайт Chesterpub <info@chesterpub.ru>';
			$headers[] = 'content-type: text/html';
			
			$attachments = array();
			//$attachments = array(WP_CONTENT_DIR . '/uploads/attach.zip');
			
			$body='
			<html>
				<head></head>
				<body>
					'.$html.'
				</body>
			</html>
			';//<p><a href="http://chesterpub.ru/wp-admin/post.php?post='.$post_id.'&action=edit" >Перейти к обработке</a></p>array('alexander.zybin@mail.ru', 'chesterpub57@mail.ru', 'ele009@mail.ru', 'hello@dorohovdesign.com', )
			wp_mail(array('chesterpub57@mail.ru', ), 'Новое резюме на сайте #'.$post_id, $body, $headers, $attachments);
			
		}
		
		
		
		
	}
	
	$_SESSION['tmp']['data-msg'] = 'Ваше резюме принято. Наши сотрудники свяжутся с Вами';
	
}

Header('Location: /vacancy/');
//var_dump($_FILES);
die();

}
add_action('admin_post_nopriv_contact_form', 'vacancy_get_post');
add_action('admin_post_contact_form', 'vacancy_get_post');

