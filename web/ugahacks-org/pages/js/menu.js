const Menu = new (function () {
	/** Pixels required to swipedown to close the menu */
	const MENU_CLOSE_SWIPE_THRESHOLD = 50;

	// private methods
	/**
	 * Adds an event to close the menu on swipe down
	 */
	function closeMenuOnSwipeDown() {
		let start;
		let touchStart = function (e) {
			start = e.touches[0].clientY;
		};
		let touchMove = function (e) {
			let current = e.touches[0].clientY;

			if (start - current > MENU_CLOSE_SWIPE_THRESHOLD) {
				if ($('nav').hasClass('responsive-open')) {
					toggleMenu();

					$(document).off('touchstart');
					$(document).off('touchmove');
				}
			}
		};
		$(document).off('touchstart').on('touchstart', touchStart);
		$(document).off('touchmove').on('touchmove', touchMove);
	}
	
	/**
	 * Open and close the mobile menu depending on the state of it.
	 */
	function toggleMenu () {
		$('.menu-toggle').toggleClass('is-active');
		if ($('nav').hasClass('slide-in')) {
			$('nav').removeClass('slide-in');
			setTimeout(function () {
				$('nav').removeClass('responsive-open');
			}, 250);
		} else {
			$('nav').addClass('responsive-open');
			setTimeout(function () {
				$('nav').addClass('slide-in');
				// on swipe down
				closeMenuOnSwipeDown();
			}, 50);
		}
	}

	// dom 
	$(document).ready(function () {
		$('.menu-toggle').on('click', toggleMenu);
		$('.btn-toggle').on('click', toggleMenu); // for 'contact us' on mobile 
	});
})();



