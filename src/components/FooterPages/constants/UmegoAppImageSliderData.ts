const UmegoAppImageSliderSettings = {
	infinite: true,
	arrows: false,
	speed: 600,
	slidesToShow: 3,
	slidesToScroll: 1,
	centerMode: true,
	autoplay: true,
	autoplaySpeed: 2000,
	cssEase: 'linear',

	responsive: [
		{
			breakpoint: 1300,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};

export { UmegoAppImageSliderSettings };
