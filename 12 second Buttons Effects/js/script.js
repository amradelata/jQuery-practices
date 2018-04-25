
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


	});

		 $('.scroll-top').click(function () {

		$('html, body').animate({

			scrollTop:0

		},1000);

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
		 //first Buttons With Effects 
		 $('.from-left').hover(function () {
		 	$(this).find('span').eq(0).animate({
		 		width: '100%'
		 	},500);

		 }, function () {
			$(this).find('span').eq(0).animate({
				width: '0'
			},500);

		 });

		 // second Buttons With Effects border-bottom

		 $('.border-left').hover(function () {
		 	$(this).find('span').eq(0).animate({         //".eq(0)" mean "first span"
		 		width: '100%'
		 	},500);

		 }, function () {
			$(this).find('span').eq(0).animate({
				width: '0'
			},500);

		 });
// animated-progress

$('.animated-progress span').each(function () {         //every  'span' i do this function on it 
	$(this).animate({
		width: $(this).attr('data-progress')  			//width = the value in 'data-progress'

	}, 1000, function () {		//here after i get the width  the callback function... start				


		$(this).text($(this).attr('data-progress'));  //i get the value in 'data-progress' and i put it in 'span' as text
	});
});
	// fixed menu
	$('.fixed-menu .fa-globe').on('click', function () {  //When i click on the '.fa-globe' the function start
		console.log($('.fixed-menu'))

		$(this).parent('.fixed-menu').toggleClass('is-visible');    // in '.fixed-menu' put and removeClass 'is-visible'


		if($(this).parent('.fixed-menu').hasClass('is-visible')){    //if '.fixed-menu' hasClass 'is-visible'
  
			$(this).parent('.fixed-menu').animate({                 //'.fixed-menu' left 0
				left: 0	
				}, 500);
			// $('body').animate({
			// 	paddingLeft: '220px'   								this push the body 
			// }, 500);
		}else{
			$(this).parent('.fixed-menu').animate({
				left: '-240px'	
				// left: '-98%' ...... image 

			}, 500);

			// $('body').animate({                                this push the body
			// paddingLeft: 0
			// }, 500);
		}
	});


	// chang-colors

	$('.chang-colors li').on('click', function () {
		$('body').attr('data-default-color', $(this).data('color'));

		
		// this two line mean when i click on the 'li' will be add attr 'data-default-color'
		 // and get the value 'data-color' from 'li ' i click on it and put it in the 'data-default-color'
		// to bee like this (data-default-color="purple")

		
	});

// thumbnails gallery


	$('.thumbnails img').on('click', function () {                               	//when i click on img in 'thumbnails' div this 'img' put class 'selected' 
																					//( and  .siblings mean = Brothers)  removeClass('selected') from all Brothers
		$(this).addClass('selected').siblings().removeClass('selected');

		$('.master-img img').hide().attr('src', $(this).attr('src')).fadeIn(500);        //i will change the img source in 'master-img' to img source
																				//i clicked on it

	});



	$('.master-img .fa-chevron-right').on('click', function () {

		if ($('.thumbnails .selected').is(':last-child')) {

			$('.thumbnails img').eq(0).click();                 //if the image .selected is last-child get my image number one
																//else keep going and get my next  image

		}else{

			$('.thumbnails .selected').next().click();

			 }


		
	});

	$('.master-img .fa-chevron-left').on('click', function () {

		if ($('.thumbnails .selected').is(':first-child')) {

			$('.thumbnails img:last').click();
 																//if the image .selected is first-child get my the last image
																//else keep going and get my prev  image
		}else{

			$('.thumbnails .selected').prev().click();

			 }

	});



// start products 

// toggle products description

$('.products .product i').on('click', function () {

	$(this).toggleClass('fa-plus fa-minus')

	$(this).next('p').slideToggle()
});






}); 


