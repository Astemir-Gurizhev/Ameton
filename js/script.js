new Swiper ('.swiper-container',{
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	/*centeredSlides: true,*/
	spaceBetween: 24,
	slidesPerView: "auto",
	watchOverflow: true,
	initialSlide: 0,
	/*loop: true,*/
	autoplay: {
		delay: 5000,
		stopOnLastSlide: false,
		disableOnIteration: false,
	}
});

document.addEventListener('click', function(event) {
	if (event.target.closest('.swiper-container')) {
	} else {
		event.preventDefault()
	}
})