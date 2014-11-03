;$(function() {	
	'use strict';

	var dribbbleUrl = 'http://api.dribbble.com/players/edpoole/shots/',
		dribbbleImage = [],
		pageWidth = $(document).width(),
		columns = 10,
		rows = 9,
		speed = 2000,
		enabled = true,
		display = [],
		concurrentShots = 60,
		randomShot,
		shotCount = 0,
		left = 0,
		top = 0;

	var shotWidth = pageWidth / columns;
	var shotHeight = (shotWidth / 4) * 3;


	$.ajax({
		type: 'GET',
		url: dribbbleUrl,
		data: { per_page: '30' },
		dataType: 'jsonp',
		success: function(data) {
			$.each(data.shots, function(i, shot) {
				dribbbleImage[i] = data.shots[i].image_url;
			});

			for (var i = 0; i < concurrentShots; i++) {
				randomShot = Math.floor(Math.random() * dribbbleImage.length);
				display.push(dribbbleImage[randomShot]);
			}			
			window.setInterval(function() {

				left = Math.floor(Math.random() * columns) * shotWidth;
				top = Math.floor(Math.random() * rows) * shotHeight;

				// Remove image from the DOM

				if (!shotCount < concurrentShots) {
					var i = shotCount - concurrentShots;
					$('#' + i).fadeOut();
					window.setTimeout(function() {
						$('#' + i).remove();
					}, 300);
				}

				// Remove the first image from the array
				display.shift();

				// generate a new random image and push it onto the array queue
				randomShot = Math.floor(Math.random() * dribbbleImage.length);
				display.push(dribbbleImage[randomShot]);

				// render image				
				$('.js-dribbble').append('<img id="' + shotCount + '" class="dribbble__shot" style="width:' + shotWidth + 'px; left: ' + left  + 'px; top: ' + top + 'px;" src="' + display[0] + '" />');
				

				$('#' + shotCount).hide().fadeIn();

				shotCount++;

			}, 1000);
		}
	});

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