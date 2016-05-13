<!DOCTYPE html>
<html <?php language_attributes();?> class="no-js" > 
<head>

<?
$this->tpl('_/head', array());
wp_head();
?>

</head>

<?
$body_str = 'azbnbasetheme fecss-jscart open-menu-navbar';//open-menu-navbar
?>
<body <?php body_class($body_str); ?> data-jscart-sum="0" data-msg="<?=$_SESSION['tmp']['data-msg'];?>" >

<?
unset($_SESSION['tmp']['data-msg']);

if(is_front_page() || $this->post['id'] == 24 || $this->post['id'] == 7 || $this->post['id'] == 16) {
?>

<div class="page-loader full-screen chester-style active" >
	<div class="at-center" >
		<div class="middle" >
			<div class="chester-container" >
				<div class="blind" ></div>
			</div>
			<div class="load-word" >Загрузка</div>
		</div>
	</div>
</div>

<?
}
?>

<?
//$this->tpl('_/header/'.$this->lng, array());