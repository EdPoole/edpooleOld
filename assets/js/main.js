;$(function() {	
	'use strict';

	var dribbbleUrl = 'http://api.dribbble.com/players/edpoole/shots/',
		dribbbleImage = [],
		pageWidth = $(document).width(),
		numberOfShotsPerLine = 10,
		rows = 5;


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
			dribbbleContainerHeight = ((shotWidth / 4) * 3) * rows;

			console.log(dribbbleContainerHeight);

		$('.dribbble__container').css('height', dribbbleContainerHeight);
		for (var i = 0; i < (numberOfShotsPerLine * rows); i++) {
			var j = Math.floor(Math.random() * dribbbleImage.length);
			$('.dribbble__container')
			.append('<img class="dribbble__shot" style="width:' + shotWidth + 'px;" src="' +
				dribbbleImage[j] + '" />');
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