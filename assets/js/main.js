(function ($) {
	"use strict";


	// reponsive menu
	const resBar = document.querySelectorAll('.humberger-bar, .resonsive-slide, .resonsive-slide-overlay')
	resBar.forEach(btn => {
		btn.addEventListener('click', ()=>{
			for (let i = 0; i < resBar.length; i++) {
				resBar[i].classList.toggle('active')
			}
		})
	});


	//tab
	tabActiveFun(document.querySelectorAll('.feature-tab-link'), document.querySelectorAll('.feature-tab-item'))
	tabActiveFun(document.querySelectorAll('.progress-tab-link'), document.querySelectorAll('.progress-tab-item'))
	tabActiveFun(document.querySelectorAll('.intro-tab-link'), document.querySelectorAll('.intro-tab-item'))

	function tabActiveFun(tabLinks, tabItems) {
		
		tabLinks.forEach((link,index) => {
			link.addEventListener('click', ()=>{
				for (let i = 0; i < tabLinks.length; i++) {
					tabLinks[i].classList.remove('active')
				}
				for (let i = 0; i < tabItems.length; i++) {
					tabItems[i].classList.remove('active')
				}

				link.classList.add('active')
				tabItems[index].classList.add('active')
			})
		});
	}

	// topic tab
	const topicTabLink = document.querySelectorAll('.topic-tab-links span')
	topicTabLink.forEach((link,index) => {
		link.addEventListener('click', ()=>{
			let tabContent = link.parentElement.nextElementSibling.children
			for (let i = 0; i < topicTabLink.length; i++) {
				topicTabLink[i].classList.remove('active')
			}
			for (let i = 0; i < tabContent.length; i++) {
				tabContent[i].classList.remove('active')
			}

			link.classList.add('active')
			tabContent[index].classList.add('active')
		})
	});


	/*=========================
	PRELOADER JS
	===========================*/
	$(window).on('load', function (event) {
		$('.preloader').delay(500).fadeOut(500);
	});

	// One Page Nav
	var top_offset = $('.header-area').height() - 170;
	$('.mainmenu ul, .responsive-menu ul').onePageNav({
		scrollOffset: top_offset,
	});


	/*=========================
	Hero-slider SLIDER JS
	===========================*/
	function headerSlider() {
		var BasicSlider = $('.hero-active-slider');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-active-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-active-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: true,
			fade: true,
			arrows: false,
			responsive: [{
				breakpoint: 767,
				settings: {
					dots: true,
					arrows: false
				}
			}]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	headerSlider();




	/*=========================
	magnificPopup image JS
	===========================*/
	$('.play-icon').magnificPopup({
		type: 'iframe'
	});

		// sticky
		var wind = $(window);
		var sticky = $('.header-content-wrap');
		wind.on('scroll', function () {
			var scroll = wind.scrollTop();
			if (scroll < 100) {
				sticky.removeClass('sticky');
			} else {
				sticky.addClass('sticky');
			}
		});


	/*=========================
	SCROLL-UP JS
	===========================*/
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	/*=========================
	AOS JS
	===========================*/
	AOS.init({
		disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 1000, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
	});

	
})(jQuery);