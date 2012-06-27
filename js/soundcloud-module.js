$.scPlayer.defaults.onDomReady = function() {
	$('.sc-player').parent().scPlayer();
	$(document).bind('onPlayerInit.scPlayer', function(event) {
		if( !$.browser.msie && typeof(window.outerHeight) == 'number' ) {
			var heightOffset = window.outerHeight - window.innerHeight,
				widthOffset = window.outerWidth - window.innerWidth;
			// alert([$('.sc-player').outerWidth(), window.outerWidth, window.innerWidth]);
			// alert([$('.sc-player').outerHeight(), window.outerHeight, window.innerHeight]);
			window.resizeTo($('.sc-player').outerWidth() + widthOffset,
				$('.sc-player').outerHeight() + heightOffset
			);
		}
		setTimeout(function() {
			$('.sc-player .sc-trackslist .active').first().click();
		}, 100);
	});
	if( $.browser.msie ) {
		$(document).bind('soundcloud:onPlayerReady', function(event, data) {
			for( var i = 0; i < 2; i++ ) {
				setTimeout(function() {
					$('.sc-player .sc-trackslist .active').first().click();
				}, 500);
			}
		});
	}
};
$.scPlayer.popupLinks = function( selector ) {
	jQuery(function($) {
		$(selector).click(function() {
			window.open($(this).attr('href'), 'soundCloudPlayer', 'menubar=0,toolbar=0,location=1,personalbar=0,scrollbars=0,statusbar=0,status=0,width=541,height=270');
			return false;
		});
	});
};
