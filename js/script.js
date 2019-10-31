$(document).ready(function () {
	$('.js-burger-btn').click(function () {
		$(this).toggleClass('active-btn');
		$('.nav').toggleClass('active');
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.topBtn').fadeIn();
		} else {
			$('.topBtn').fadeOut();
		}
	});

	$('.topBtn').click(function () {
		$('html,body').animate({
			scrollTop: 0
		}, 800);
	});

	$(".red-btn").click(function () {
		$('html,body').animate({
				scrollTop: $("#about").offset().top}, 'slow');
	});

	$(".grey-btn").click(function () {
		$('html,body').animate({
				scrollTop: $("#services").offset().top}, 'slow');
	});
});