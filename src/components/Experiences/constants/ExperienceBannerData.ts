import { Settings } from 'react-slick';

const HomeExperiencesBannerSettings: Settings = {
	className: 'center',
	centerMode: true,
	infinite: true,
	centerPadding: '60px',
	arrows: true,
	slidesToShow: 2,
	speed: 500,
	swipeToSlide: true,
	autoplay: true,
	autoplaySpeed: 4000,
	cssEase: 'linear',
	responsive: [
		{
			breakpoint: 1500,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
				arrows: false,
				variableWidth: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				variableWidth: true,
				centerMode: false,
				arrows: false,
			},
		},
	],
};

const ExperienceBannerItemsList = [
	'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2Fwb3JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
	'https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2luZ2Fwb3JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
	'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2luZ2Fwb3JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
	'https://images.unsplash.com/photo-1513622790541-eaa84d356909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9uZ2tvbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
	'https://images.unsplash.com/photo-1552415274-73ad7198cb93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNpbmdhcG9yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
	'https://media.istockphoto.com/id/1219866050/photo/big-beautiful-temple-in-vietnam-phu-quoc-island.jpg?b=1&s=170667a&w=0&k=20&c=WcJuaxo20EtVCCGM1wDY9Oqwfz98lMO7UVuFq6zh8Jc=',
];

export { HomeExperiencesBannerSettings, ExperienceBannerItemsList };
