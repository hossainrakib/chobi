$(document).ready(function(){

	//mobile manu
	$('#mobile-menu').slicknav({
		'label' : '',
		'prependTo' : '.mobile-icon',
	});
		
	//hero active
	$('.hero-active').slick({
		dots: false,
		accessibility:true,
		autoplay:true,
		autoplaySpeed:5000,
		infinite: true,
		arrows:true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>'


	  });

	//service-product-active
	$('.service-active').slick({
		dots: true,
		accessibility:true,
		autoplay:false,
		autoplaySpeed:5000,
		infinite: true,
		arrows:false,
		speed: 300,
		loop:true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
		]
	});

	// external js: masonry.pkgd.js
	
	$('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	  });
	  	
	$('.grid2').masonry({
		itemSelector: '.grid-item2',
		columnWidth: '.grid-sizer2',
		percentPosition: true
	  });
  
 	//service-product-active
	 $('.brand-active').slick({
		dots: false,
		accessibility:true,
		autoplay:false,
		autoplaySpeed:5000,
		infinite: true,
		arrows:false,
		speed: 300,
		loop:true,
		slidesToShow: 5,
		slidesToScroll: 3,
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
			},
			{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
		]
	});

	//service-product-active
	$('.team-active').slick({
		dots: false,
		accessibility:true,
		autoplay:true,
		autoplaySpeed:5000,
		infinite: true,
		arrows:false,
		speed: 300,
		loop:true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
		]
	});
		//service-product-active
		$('.blog-active').slick({
			dots: false,
			accessibility:true,
			autoplay:false,
			autoplaySpeed:5000,
			infinite: true,
			arrows:false,
			speed: 300,
			loop:true,
			slidesToShow: 3,
			slidesToScroll: 3,
			responsive: [
				{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
				},
				{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
				},
				{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
				}
			]
		});
	//testimonials active
	$('.testimonials-active').slick({
		dots: false,
		accessibility:true,
		autoplay:true,
		autoplaySpeed:5000,
		infinite: true,
		arrows:false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
	  });

	//active-service-testimonials
	$('.active-service-testimonials').slick({
		dots: true,
		accessibility:true,
		autoplay:false,
		autoplaySpeed:5000,
		infinite: true,
		arrows:false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
	  });

	  //project-details

		$('.image-link').magnificPopup({
			type:'image'
		});

		//problem this
		//subscribe-loging
		$(".subscripbe-wrapper #submit").click(function(e){
			var inValid = true;
			$("input[type='email']#requered").each(function(){
				if($(this).val()==''){
					inValid = false;
					$(this).css({
						"border":"1px solid red",
						"background":'white'
					});
				}else{
					$(this).css({
						"border":"",
						"background":'#cfe7d9'
					});
				}
			});
			
	
			if(inValid == false){
				e.preventDefault();
			}else{
				clear();
				document.getElementById("reply") .innerHTML = "";
				return false;
			}

	 
		});

		//costomar function
		function clear(){
			$('.subscripbe-wrapper #myaction :input#requered').each(function(){
				$(this).val('');
			});
		}

	//contact-loging
	$(".contact #submits").click(function(e){
		var inValid = true;
		$(".contact input[type='email']#requere").each(function(){
			if($(this).val()==''){
				inValid = false;
				$(this).css({
					"border":"1px solid red",
					"background":'white'
				});
			}else{
				$(this).css({
					"border":"",
					"background":'#cfe7d9'
				});
			}
		});
		$(".contact input[type='text']#requere").each(function(){
			if($(this).val()==''){
				inValid = false;
				$(this).css({
					"border":"1px solid red",
					"background":'white'
				});
			}else{
				$(this).css({
					"border":"",
					"background":'#cfe7d9'
				});
			}
		});


		if(inValid == false){
			e.preventDefault();
		}else{
			clear();
			document.getElementById("replys") .innerHTML = "";
			return false;
		}
	});
	//costomar function

	function clear(){
		$('.contact #myactions :input').each(function(){
			$(this).val('');
		});
	}

	//menu-stacky

	$(window).on('scroll', function(){
		if($(window).scrollTop() > 300){
			$('.header-area').addClass('fixed-top');
		}
		else{
			$('.header-area').removeClass('fixed-top');
		}
	})
	

    // scroll-top
	$(window).scroll(function(){
		if($(this).scrollTop() > 200 ) {
			$('.scroll-top-area').addClass('fixed-bottom');

		} else {
			$('.scroll-top-area').removeClass('fixed-bottom');
		}
	});

	$('.scroll').click(function(){
		$('html, body').animate({
			scrollTop:0
		},300);
	});

	// service-catagory__menu active

	$('.service-catagory__menu ul li').on('click', function(){
		$('.service-catagory__menu ul li.active').removeClass('active');
	})
	
	$('.service-catagory__menu ul li').on('click', function(){
		$(this).addClass('active');
	})

	 //gallery-active
	
	 /* gallery button code */
	$('.button-group li.nav-item button').on('click', function(){
		$('.button-group li.nav-item button.actives').removeClass('actives');
	});
	$('.button-group li.nav-item button').on('click', function(){
		$(this).addClass('actives');
	});

	/* gallery showed contain code */
	$('.gallery-shows .mix').fadeOut('fast');
	$('.button-group li.nav-item button').on('click', function(){
		$('.gallery-shows .mix.anime').hide();
	});
		
	
	$('.button-group li.nav-item button').on('click', function(){
		$('.gallery-shows .mix.anime').removeClass('anime h-100');
	});

	$('.button-group li.nav-item button.fooddrink.actives').on('click', function(){
		$('.gallery-shows .mix.fooddrink').fadeIn();
		$('.gallery-shows .mix.fooddrink').addClass('anime h-100');
	})

	$('.button-group li.nav-item button.besiness').on('click', function(){
		$('.gallery-shows .mix.besiness').fadeIn(1800);
		$('.gallery-shows .mix.besiness').addClass('anime h-100');
	})
	$('.button-group li.nav-item button.weeding').on('click', function(){
		$('.gallery-shows .mix.weeding').fadeIn();
		$('.gallery-shows .mix.weeding').addClass('anime h-100');
	})
	$('.button-group li.nav-item button.drink').on('click', function(){
		$('.gallery-shows .mix.drink').fadeIn(1800);
		$('.gallery-shows .mix.drink').addClass('anime h-100');
	})
	$('.button-group li.nav-item button.fine').on('click', function(){
		$('.gallery-shows .mix.fine').fadeIn();
		$('.gallery-shows .mix.fine').addClass('anime h-100');
	})
	$('.button-group li.nav-item button.arts').on('click', function(){
		$('.gallery-shows .mix.arts').fadeIn(1800);
		$('.gallery-shows .mix.arts').addClass('anime h-100');
	})
	$('.button-group li.nav-item button.nature').on('click', function(){
		$('.gallery-shows .mix.nature').fadeIn();
		$('.gallery-shows .mix.nature').addClass('anime h-100');
	})
	$('.button-group li.nav-item button.technology').on('click', function(){
		$('.gallery-shows .mix.technology').fadeIn(1800);
		$('.gallery-shows .mix.technology').addClass('anime h-100');
	})
	$('.button-group li.nav-item button.fashion').on('click', function(){
		$('.gallery-shows .mix.fashion').fadeIn('fast');
		$('.gallery-shows .mix.fashion').addClass('anime h-100');
	})

	 //gallery-active
	 var mixer = mixitup('.gallery-mixite');

	 // active button function
	$('.button-group li.nav-item button').on('click', function(event){
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});



});
	//preload-active
	$(window).on('load', function(){
		$('.gallery-shows .mix.anime').fadeIn();
	});
	//preload-active
	$(window).on('load', function(){
		$('.preload-area').fadeOut()
	});

	
	//mobile-menu
	$(window).on('scroll', function(){
		if($(window).scrollTop() > 200){
			$('.slicknav_menu').addClass('stacky');
		}
		else{
			$('.slicknav_menu').removeClass('stacky');
		}
	})
