const Main = new (function () {
	/** Register routers */
	Router.registerState("", Router.action.scrollWindowTo(0))
	Router.registerState("about", Router.action.scrollWindowToElement('[data-section="about"]'));
	Router.registerState("timeline", Router.action.scrollWindowToElement('[data-section="timeline"]'));
	Router.registerState("team", Router.action.scrollWindowToElement('[data-section="team"]'));

	/** SCROLLING ANIMATION USING ScrollX setup */

	// After 5px she should add the scorlling class to the nav before. If we go backwa
	ScrollX.after(5, () => $('nav').addClass('scrolling'), () => $('nav').removeClass('scrolling'));

	let eventWrapperHeight = $(".event-card-wrapper").height();
	ScrollX.addCallable("timelineProgress", (frameperc) => {
		if (frameperc < 0.2) frameperc = 0;
		if (frameperc > 0.8) frameperc = 1;
		let height = eventWrapperHeight * frameperc;

		document.querySelector('.timeline-progress').style.height = height + 'px';
	});


	/** Setup AOS */
	AOS.init();
})();
