const EXPERIENCE_MODEL_BOX_DATA = [
	{
		id: 1,
		label: 'Adult ( Singapore resident )',
	},
	{
		id: 2,
		label: 'Child ( Singapore resident )',
	},
	{
		id: 3,
		label: 'Adult',
	},
	{
		id: 4,
		label: 'Child',
	},
];

const ExperienceItemDetailImageCarousel = {
	dots: true,
	arrows: false,
	dotsClass: 'slick-dots slick-thumb',
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplaySpeed: 2500,
	autoplay: true,
};

export { ExperienceItemDetailImageCarousel, EXPERIENCE_MODEL_BOX_DATA };
