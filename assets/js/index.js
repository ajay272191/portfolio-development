// writing-text
const Portfolio = function() {

	function typeAnimation() {
		Typed.new("#writing_text", {
			strings: [
				"  I am a Freelance Developer from Lucknow, India.   ", "passionate about coding and love building things.   ", "worked on many technologies such as JavaScript, Python, HTML... ", "Please let me know if you have anythin ask, assign or share.               "
			],
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				typeAnimation();
			},
		});
	}
	return {
		typeAnimation: typeAnimation
	}
}();
Portfolio.typeAnimation();
