/**
 * Scroll-x is a lightweight scroll controller that is configured in HTML.
 * @author Shawn Holman
 */
const ScrollX = new (function () {
	const callables = new Map();
	const afters = new Map();

	const SCROLL_X_ID = 'scrollx';
	const SCROLL_X_BOOLS = [
	];
	const SCROLL_X_DATA = [
		// based on determines which screenline 
		'based-on',
		'offset',
	];
	const SCROLL_X_FUNCTIONS = {
		// toggle class
		'toggle-class': function (frameperc, param, addClass) {
			if (addClass) {
				this.classList.add(param);
			} else {
				this.classList.remove(param);
			}
		},
		// add class
		'add-class-in': function (frameperc, param) {
			this.classList.add(param);
		},
		// add class
		'add-class-out': function (frameperc, param) {
			this.classList.add(param);
		},
		// remove class
		'remove-class-in': function (frameperc, param) {
			this.classList.remove(param);
		},
		// remove class
		'remove-class-out': function (frameperc, param) {
			this.classList.remove(param);
		},
		'call-on': function (frameperc, param) {
			let parts = param.split(/\s*:\s*/);
			let funcName = parts[0];

			if (parts.length >= 2) {
				let args = parts[1].split(/\s*,\s*/);
				callables.get(funcName).apply(this, [frameperc, ...args]);
			} else {
				callables.get(funcName).apply(this, [frameperc]);
			}
		},
		'call-off': function (frameperc, param) {
			let parts = param.split(/\s*:\s*/);
			let funcName = parts[0];

			if (parts.length >= 2) {
				let args = parts[1].split(/\s*,\s*/);
				callables.get(funcName).apply(this, [frameperc, ...args]);
			} else {
				callables.get(funcName).apply(this, [frameperc]);
			}
		}
	};

	this.addCallable = (name, func) => {
		if (name === '' || func === undefined) {
			throw new Error('Callable requires a name and function.');
		}
		if (callables.has(name)) {
			throw new Error('Callable already exists.');
		}
		callables.set(name, func);
	};

	this.after = (scrollX, on, off) => {
		afters.set(scrollX, [on, off]);
	}

	function inDataSet(element, datapoint) {
		return element.dataset.hasOwnProperty(datapoint);
	}

	/**
	 * Returns a list of scrollX booleans
	 * @param  {jQuery.Element} scrollXElement The scrollX element to get the booleans for
	 * @return {Object} list of booleans
	 */
	function getBooleans(scrollXElement) {
		let obj = {};
		for (let boolTag of SCROLL_X_BOOLS) {
			let key = boolTag.toUpperCase().replace(/-/g, '_');
			let data = scrollXElement.getAttribute('data-' + boolTag);
			obj[key] = data === '' || data === 'true';
		}
		return obj;
	}

	/**
	 * Returns a list of scrollX data
	 * @param  {jQuery.Element} scrollXElement The scrollX element to get the booleans for
	 * @return {Object} list of data points
	 */
	function getData(scrollXElement) {
		let obj = {};
		for (let dataTag of SCROLL_X_DATA) {
			let key = dataTag.toUpperCase().replace(/-/g, '_');
			let data = scrollXElement.getAttribute('data-' + dataTag) || '';
			if (!isNaN(parseFloat(data))) {
				obj[key] = parseInt(data);
			} else {
				obj[key] = data;
			}
		}
		return obj;
	}

	/**
	 * Returns a list of scrollX functions
	 * @param  {jQuery.Element} scrollXElement The scrollX element to get the booleans for
	 * @return {Object} list of functions
	 */
	function getFunctions(scrollXElement, frameperc) {
		let obj = {};
		for (let funcTag in SCROLL_X_FUNCTIONS) {
			let key = funcTag.toUpperCase().replace(/-/g, '_');
			let data = scrollXElement.getAttribute('data-' + funcTag) || false;
			obj[key] = data ? SCROLL_X_FUNCTIONS[funcTag].bind(scrollXElement, frameperc, data) : false;
		}
		return obj;
	}

	/**
	 * Get window x position
	 * @return {{top: number, middle: number, bottom: number}} Three ranges to choose the window x position from
	 */
	function getWinX() {
		const winHeight = window.innerHeight;
		const winX = window.scrollY;

		return {
			top: winX,
			middle: winX + winHeight / 2,
			bottom: winX + winHeight,
		}
	}

	/**
	 * Get x position of an element
	 * @return {{top: number, middle: number, bottom: number}} Three ranges to choose the element x position from
	 */
	function getElX(element) {
		const elHeight = element.clientHeight;
		const elX = element.getBoundingClientRect().top + window.scrollY;

		return {
			top: elX,
			middle: elX + elHeight / 2,
			bottom: elX + elHeight,
		}
	}

	let winX = 0;
	let ticking = false;


	function scrollAnim () {
		// reset the tick so we can
		// capture the next onScroll
		ticking = false;

		afters.forEach(([on, off], key) => {
			if (winX.top > key) {
				on();
			} else {
				off();
			}
		});

		let nodes = document.querySelectorAll('[data-Scrollx]');

		for (let element of nodes) {
			// Get some information from the element
			const position = getElX(element);
			const bools = getBooleans(element);
			const data = getData(element);

			const elementPos = position['top'];

			// set up the trigger determiners
			let offset = data.OFFSET || 0;
			// the scroll offset to base the scrolling on
			let scrollX = winX[data.BASED_ON || 'middle'] + offset;

			const percentCompleted = (scrollX - elementPos) / element.clientHeight;

			const beenOnScreen = element.dataset.hasOwnProperty('hasBeenOnScreen') ? element.dataset.hasBeenOnScreen : false;
			if (percentCompleted >= 0) {
				const fncs = getFunctions(element, percentCompleted);

				if (!beenOnScreen) {
					if (fncs.ADD_CLASS_IN)  fncs.ADD_CLASS_IN();
					if (fncs.REMOVE_CLASS_IN) fncs.REMOVE_CLASS_IN();
				}

				if (percentCompleted <= 1) {
					if (fncs.CALL_ON) fncs.CALL_ON();
					if (fncs.TOGGLE_CLASS) fncs.TOGGLE_CLASS(true);
				} else {
					if (fncs.CALL_OFF) fncs.CALL_OFF();
					if (fncs.TOGGLE_CLASS) fncs.TOGGLE_CLASS(false);
				}

				element.dataset.hasBeenOnScreen = true;
			} else {
				if (beenOnScreen) {
					const fncs = getFunctions(element, percentCompleted);

					if (fncs.ADD_CLASS_OUT) fncs.ADD_CLASS_OUT();
					if (fncs.REMOVE_CLASS_OUT) fncs.REMOVE_CLASS_OUT();
					if (fncs.CALL_OFF) fncs.CALL_OFF();
					if (fncs.TOGGLE_CLASS) fncs.TOGGLE_CLASS(false);

					element.dataset.hasBeenOnScreen = false;
				}
			}
		};
	}

	function requestTick() {
		if(!ticking) {
			requestAnimationFrame(scrollAnim);
		}
		ticking = true;
	}

	/**
	 * Main function handles the math to determine when to trigger an element. 
	 * @return {[type]} [description]
	 */
	function handleScroll () {
		winX = getWinX();
		requestTick();
	}

	$(document).ready(function () {
		handleScroll();
		$(window).on('scroll', handleScroll);
	});
})();
