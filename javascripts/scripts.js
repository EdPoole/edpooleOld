$(function() {
	$('.focus').click(function(e) {
		e.preventDefault();
		// var imageHeight = $('blog-image-wrap').height();
		if($('.focus').hasClass('toggle')) {
			$('.blog-image-wrap').animate({
				height: 0,
				opacity: 0
			}, 1000, function() {
			
			});
			$('header').animate({
				opacity: 0
			}, 1000, function() {

			});
			$('footer').animate({
				opacity: 0
			}, 1000, function() {

			});
			$('.post-date').animate({
				opacity: 0
			}, 1000, function() {

			});
			$('html').css('background-color', 'white');
			$('.focus').removeClass('toggle');
		} else {
			$('.blog-image-wrap').animate({
				height: '257px',
				opacity: 100
			}, 1000, function() {
			
			});
			$('header').animate({
				opacity: 100
			}, 1000, function() {

			});
			$('footer').animate({
				opacity: 100
			}, 1000, function() {

			});
			$('html').css('background-color', '#f2ede6');
			$('.focus').addClass('toggle');
		}
	});


	$('.comments-toggle.show-toggle').click(function() {
		$('.comments').animate({
			height: '374px'
		}, 1000, function() {

		});
		$('.comments-toggle.show-toggle').fadeOut();
		$('.comments-toggle.hide-toggle').fadeIn().css('display', 'block');
	});

	$('.comments-toggle.hide-toggle').click(function() {
		$('.comments').animate({
			height: '0'
		}, 1000, function() {

		});
		$('.comments-toggle.hide-toggle').fadeOut();
		$('.comments-toggle.show-toggle').fadeIn().css('display', 'block');
	});




});