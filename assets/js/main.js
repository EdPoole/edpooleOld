;$(function() {	
	'use strict';

	var dribbbleUrl = 'http://api.dribbble.com/players/edpoole/shots/',
		dribbbleImage = [],
		pageWidth = $(document).width(),
		numberOfShotsPerLine = 10,
		rows = 9;


	$.ajax({
		type: 'GET',
		url: dribbbleUrl,
		data: { per_page: '30' },
		dataType: 'jsonp',
		success: function(data) {
			$.each(data.shots, function(i, shot) {
				dribbbleImage[i] = data.shots[i].image_url;
			});
			buildDisplay();
		}
	});


	function buildDisplay() {
		var shotWidth = pageWidth / numberOfShotsPerLine,
			shotHeight = (shotWidth / 4) * 3,
			shotX = 0,
			shotY = 0,
			col = 0;

		for (var i = 0; i < (numberOfShotsPerLine * rows + 1); i++) {
			var j = Math.floor(Math.random() * dribbbleImage.length);		
			$('.js-dribbble')
			.append('<img class="dribbble__shot" style="width:' + shotWidth + 'px; left: ' + shotX  + 'px; top: ' + shotY + 'px;" src="' + dribbbleImage[j] + '" />');			
			if (col < numberOfShotsPerLine) {
				shotX = shotX + shotWidth;
			} else {
				shotX = 0;
				shotY = shotY + shotHeight;
				col = 0;				
			}
			col++;
		}
	};

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