
$(function () {

	'use strict';
	// calculate Body Padding Top aepend On Navbar Height
	
	// $('body').css('background','red')      to change css in jquery

	$('body').css('paddingTop', $('.navBar').innerHeight());

	// smoothly scroll to Element
	$('.navBar li a').click(function (e) {

		$('html, body').animate({
			scrollTop:$('#' + $(this).data('scroll')).offset().top + 1
		},1000);

		// e.preventDefault(); //???
		console.log('#' + $(this).data('scroll'))
	});
	// Add class Active On Navbar link and Remove From Siblings
	$('.navBar li a').click(function () {

		$('.navBar a').removeClass('active');
		$(this).addClass('active');
		// $(this).addClass('active').siblings().removeClass('active');
	});

	//in scroll do that
 
	$(window).scroll(function () {
	// in each div had class block do that      scroll navbar links with sections
		$('.block').each(function () {

			if ($(window).scrollTop() > $(this).offset().top){
				// get id attribute to every .block i scroll 
				let blockId = $(this).attr('id');
				// a = id attribute .block then i make concatenation with each other

				$('.navBar a').removeClass('active');

				$ ('.navBar li a[data-scroll="'+ blockId +'"]').addClass('active');

			}
		});
		// scrollTop button

		let buttonTop = $('.scroll-top');
		if($(window).scrollTop()>=3000){
			buttonTop.fadeIn();
			// console.log('dfds')
		}else{
			buttonTop.fadeOut();
		}

		 $('.scroll-top').click(function () {

		$('html, body').animate({

			scrollTop:0

		},1000);

		});


	});
		 // popUp
		 $(".show-more").click(function () {

		 	$($(this).data('popup')).fadeIn();
		 });

		 $(".popup").click(function () {

		 	$(this).fadeOut();
		 });

		 $(".popup .inner").click(function (even) {

		 even.stopPropagation();   //don't close this when i click on it 
		 });

		 $(document).keydown(function (e){

		 	if (e.keyCode == 27){
		 		$('.popup').fadeOut();
		 	}
		 });
}); 


