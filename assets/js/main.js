$(function() {
	
	var menuToggle = false,
		dribbbleUrl = 'http://api.dribbble.com/players/edpoole/shots/',
		dribbbleTitle = [],
		dribbbleImage = [],
		dribbbleUrls = [];

	$('.burger-menu').click(function(e) {
		e.preventDefault();
		if (menuToggle) {
			$('.hero').animate({
				'margin-top': '0'
			});
			menuToggle = false;
		} else {
			$('.hero').animate({
				'margin-top': '300px'
			});
			menuToggle = true;
		}
	});

	$('#contact').click(function(e) {
		e.preventDefault();
		$('html').addClass('modal--perspective');
		$('.modal--effect').addClass('modal--show');
	});


	$('.modal--close').click(function(e) {
		e.preventDefault();
		$('html').removeClass('modal--perspective');
		$('.modal--effect').removeClass('modal--show');
	});

	$.ajax({
		type: 'GET',
		url: dribbbleUrl,
		dataType: 'jsonp',
		success: function(data) {
			$.each(data.shots, function(i, shot) {
				dribbbleTitle[i] = data.shots[i].title;
				dribbbleImage[i] = data.shots[i].image_url;
				dribbbleUrls[i] = data.shots[i].url;
				// console.log(dribbbleTitle[i]);
				// console.log(dribbbleImage[i]);
				// console.log(dribbbleUrls[i]);
			});
			buildDisplay();
		}
	});

	function buildDisplay() {
		for (var i = 0; i < dribbbleTitle.length; i++) {
			$('.content--portfolio__dribbble--container').append('<a href="' + dribbbleUrls[i] + '" class="dribbble-image"><div class="dribbble-image__clip"><img class="feed-image" src="' + dribbbleImage[i] + '" /><h5>' + dribbbleTitle[i] + '</h5></div></div>');
		}
	}

});