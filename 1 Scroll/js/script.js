
$(function () {

	'use strict';

	// smoothly scroll to Element
	$('.navBar li a').click(function (e) {

		$('html, body').animate({
			scrollTop:$('#' + $(this).data('scroll')).offset().top
		},1000);

		e.preventDefault();
		window.console.log('#' + $(this).data('scroll'))
	});
});


