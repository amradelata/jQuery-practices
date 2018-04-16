
$(function () {

	'use strict';
	// calculate Body Padding Top aepend On Navbar Height
	
	// $('body').css('background','red')      to change css in jquery

	$('body').css('paddingTop', $('.navBar').innerHeight() + 11);

	// smoothly scroll to Element
	$('.navBar li a').click(function (e) {

		$('html, body').animate({
			scrollTop:$('#' + $(this).data('scroll')).offset().top
		},1000);

		e.preventDefault(); //???
		console.log('#' + $(this).data('scroll'))
	});
});


