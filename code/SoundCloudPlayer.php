<?php

class SoundCloudPlayer extends SiteTree {
}

class SoundCloudPlayer_Controller extends ContentController {

	public static $requirements = array('js' => array(), 'css' => array());

	public static function addRequirement( $type, $uri ) {
		$this->requirements[$type][] = $uri;
	}

	function init() {
		parent::init();
		$scripts = array(
				'sapphire/thirdparty/jquery/jquery.js',
				'soundcloud/js/soundcloud.player.api.js',
				'soundcloud/js/sc-player.js',
				'soundcloud/js/soundcloud-module.js'
		);
		foreach( self::$requirements['js'] as $uri ) {
			$scripts[] = $uri;
		}
		foreach( $scripts as $script ) {
			Requirements::javascript($script);
		}
		Requirements::combine_files('soundcloud-combined.js', $scripts);
		$stylesheets = array(
				'soundcloud/css/sc-player-standard.css',
				'soundcloud/css/soundcloud-player.css'
		);
		foreach( self::$requirements['css'] as $uri ) {
			$stylesheets[] = $uri;
		}
		foreach( $stylesheets as $stylesheet ) {
			Requirements::css($stylesheet);
		}
		Requirements::themedCSS('soundcloud-player');
		Requirements::combine_files('soundcloud-combined.css', $stylesheets);
		Requirements::process_combined_files();
	}

}

?>