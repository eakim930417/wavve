$(function () {
	//snb
	const $coupon = $('.snb>ol>li:nth-child(3)');
	const $snbUl = $('.snb>ol>li>ul');

	$coupon.on('mouseenter', function () {
		$snbUl.stop().slideDown(200);
	});
	$coupon.on('mouseleave', function () {
		$snbUl.stop().slideUp(200);
	});

	//lnb
	const $category = $('.gnb>li:nth-child(2)');
	const $lnbUl = $('.gnb>li>ol');

	$category.on('mouseenter', function () {
		$lnbUl.stop().slideDown(200);
	});
	$category.on('mouseleave', function () {
		$lnbUl.stop().slideUp(200);
	});

	//search
	const $search = $('.search');

	$search.children('label').on('click', function (evt) {
		$search.children('input').animate({ width: 300 }, 500);
		$search.css({ backgroundColor: '#000' });
	});

	$(window).on('click', function () {
		$search.children('input').animate({ width: 0 }, 500);
		$search.css({ backgroundColor: '#1b1b1b' });
	});

	$search.on('click', function (evt) {
		evt.stopPropagation();
	});

	//notice
	const $notice = $('.notice>.notice-container>ol');
	const $btnPrev = $('.notice-navigation>.prev');
	const $btnNext = $('.notice-navigation>.next');

	$btnPrev.on('click', function () {
		$notice.stop().animate({ top: 0 });
	});
	$btnNext.on('click', function () {
		$notice.stop().animate({ top: -50 });
	});

	//aside
	const $btnTop = $('aside');
	const $title = $('.title>a');

	$(window).on('scroll', function () {
		const scrollTop = Math.ceil($(window).scrollTop());
		if (scrollTop > 120) {
			$btnTop.fadeIn();
		} else {
			$btnTop.fadeOut();
		}
	});
	$btnTop.on('click', function () {
		$('html, body').animate({ scrollTop: 0 });
	});
	$title.on('click', (evt) => {
		evt.preventDefault();
		$('html, body').animate({ scrollTop: 0 });
	});
});

//slide
$(function () {
	const $btnPlay = $('.pause-button>button');
	const mainSwiper = new Swiper('.mainslide-swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		loopedSlides: 5,
		spaceBetween: 30,
		autoplay: {
			delay: 5000
		},
		pauseOnMouseEnter: true,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination'
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},

		observer: true,
		observeParents: true
	});

	$btnPlay.on('click', function () {
		if ($btnPlay.hasClass('pause') === true) {
			// $btnPlay.removeClass('pause');
			mainSwiper.autoplay.stop();
		} else {
			// $btnPlay.AddClass('pause');
			mainSwiper.autoplay.start();
		}
		$(this).toggleClass('pause');
	});
});
