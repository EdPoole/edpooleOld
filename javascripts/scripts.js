$(function() {

	$('#dsq1').removeAttr("style");


	$('.focus').click(function(e) {
		e.preventDefault();
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
			$('.focus').removeClass('toggle');
			$('.focus').addClass('active');
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
			$('.focus').addClass('toggle');
			$('.focus').removeClass('active');
		}
	});

	console.log($('.comments').height());

	$('.comments-toggle.show-toggle').click(function() {
		$('.comments').slideToggle();
	});

	var globalList = [];
	var dribbbleCount = 0,
		instagramCount = 1;
	var dribbbleComplete = false,
		instagramComplete = false;

	var dribbbleUrl = 'http://api.dribbble.com/players/edpoole/shots/';
	var instagramSrc = 'https://api.instagram.com/v1/users/29871765/media/recent';
	var instagramAccessToken = '29871765.5b9e1e6.72df43df74054022bd0fe76a01052bd8';
	var instagramUrl = instagramSrc + '?access_token=' + instagramAccessToken;

	$.ajax({
		type: 'GET',
		url: dribbbleUrl,
		dataType: 'jsonp',
		success: function(data) {
			$.each(data.shots, function(i, shot) {
				globalList[dribbbleCount] = data.shots[i].image_url;
				dribbbleCount += 2;
			});
			dribbbleComplete = true;
			finishedCall(dribbbleComplete, instagramComplete);
		}
	});

	$.ajax({
		type: 'GET',
		url: instagramUrl,
		dataType: 'jsonp',
		success: function(instagramData) {
			$.each(instagramData.data, function(i, data) {
				globalList[instagramCount] = instagramData.data[i].images.standard_resolution.url;
				instagramCount += 2;
			});
			instagramComplete = true;
			finishedCall(dribbbleComplete, instagramComplete);
		}
	});

	function finishedCall(drib, insta) {
		if (drib && insta) {
			buildDisplay();
		}
	}

	function buildDisplay() {
		globalList = jQuery.grep(globalList, function(n, i){
			return (n !== "" && n != null);
		});
		for (var i = 0; i < 30; i++) {		
			$('.feed-container').append('<div class="feed-wrapper"><img class="feed-image" src="' + globalList[i] + '" /></div>');
		}
	}

});