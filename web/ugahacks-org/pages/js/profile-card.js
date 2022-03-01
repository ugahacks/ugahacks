const ProfileCard = new (function () {
	let timer;

	/**
	 * Activates the profile picture card
	 */
	function openProfileCard () {
		clearTimeout(timer);
		let t = $(this);

		$('.card').removeClass('fade-in');
		$('.card').next().removeClass('flip');
		t.addClass('flip');

		timer = setTimeout(function () {
			t.prev().show();
			setTimeout(function () {
				t.prev().addClass('fade-in');
			}, 50)
		}, 150);
	}

	/**
	 * Closes the profile picture card
	 */
	function closeProfileCard () {
		clearTimeout(timer);
		$('.card').removeClass('fade-in');
		timer = setTimeout(() => {
			$('.card').hide();
			$('.card').next().removeClass('flip');
		}, 200);
	}

	// dom 
	$(document).ready(function () {
		$('.team-picture').on('mouseover', openProfileCard);
		$('.card').on('mouseleave', closeProfileCard);
	});
})();



