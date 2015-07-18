<?php drupal_add_css($directory.'/css/page.css', array('group' => CSS_THEME, 'every_page' => FALSE)); ?>
<div id='header'>
	<a href='<?php print $base_path; ?>' id='logo'>
		<img src='<?php print $logo; ?>'>
	</a>
	<a href='#'>Menu </a>
	<div id='user-menu'>
		<?php print render($page['header']); ?>
	</div>
</div>

<div class='section-c'>
	<div id='content-title'>
		<h3><?php print $title; ?></h3>
	</div>
	<div id='content'>
		<?php print render($page['content']); ?>
	</div>
	<div id='right'>
		<?php print render($page['sidebar_second']); ?>
	</div>
</div>

<div class='section-c'>
	<div id='footer'>
		<?php print render($page['footer']); ?>
	</div>
</div>