;$(function() {	
	'use strict';

	var dribbbleUrl = 'http://api.dribbble.com/players/edpoole/shots/',
		dribbbleTitle = [],
		dribbbleImage = [],
		dribbbleUrls = [],
		dribbbleLikes = [];

	$.ajax({
		type: 'GET',
		url: dribbbleUrl,
		dataType: 'jsonp',
		success: function(data) {
			$.each(data.shots, function(i, shot) {
				dribbbleTitle[i] = data.shots[i].title;
				dribbbleImage[i] = data.shots[i].image_url;
				dribbbleUrls[i] = data.shots[i].url;
				dribbbleLikes[i] = data.shots[i].likes_count;
			});
			buildDisplay();
		}
	});


	function buildDisplay() {
		for (var i = 0; i < dribbbleTitle.length; i++) {
			$('.portfolio__container')
			.append('<a href="' + 
				dribbbleUrls[i] + '" class="dribbble"><div class="dribbble__shot"><img src="' +
				dribbbleImage[i] + '" /></div></div>');
		}
		$('.dribbble img').fadeIn('fast');
	}


	var toggle = false;
	$('.navigation__toggle').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('is-open');
		if (toggle) {
			$('.navigation__link').removeClass('is-open').addClass('is-closed');
		} else {
			$('.navigation__link').removeClass('is-closed').addClass('is-open');	
		}
		toggle = !toggle;
	});

});