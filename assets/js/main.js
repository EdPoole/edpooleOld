var menuToggle = false;

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