
$('.navigation__toggle').click(function(e) {
	e.preventDefault();
	$(this).toggleClass('is-open');
	$('.lead--home').toggleClass('is-blurred');
	$('.navigation__model').toggleClass('is-open');
});