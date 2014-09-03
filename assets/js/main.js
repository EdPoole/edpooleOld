
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