// Offline-mode animation actions
$(document).ready(function() {
	$('.bg, .coming-header').on('webkitAnimationEnd', function(e) {
		$(this).addClass('visible');
	});
	$('.bg, .coming-header').on('animationend', function(e) {
		$(this).addClass('visible');
	});
	$('.logo').on('webkitAnimationEnd', function(e) {
		$(this).addClass('visible');
	});
	$('.logo').on('animationend', function(e) {
		$(this).addClass('visible');
	});
});