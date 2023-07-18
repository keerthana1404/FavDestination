import ExperiencesProductCard from '@components/Experiences/ExperiencesProductCard';
import { Box } from '@mui/material';
import React, { forwardRef, MutableRefObject } from 'react';
import Slider from 'react-slick';
import { Settings } from 'react-slick';

const HomeExperiencesBannerSettings: Settings = {
	centerMode: true,
	infinite: true,
	centerPadding: '60px',
	arrows: false,
	slidesToShow: 4,
	speed: 500,
	swipeToSlide: true,
	autoplay: true,
	autoplaySpeed: 4000,
	cssEase: 'linear',
	responsive: [
		{
			breakpoint: 1500,
			settings: {
				slidesToShow: 4,
			},
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 3,
				arrows: false,
			},
		},
		{
			breakpoint: 780,
			settings: {
				slidesToShow: 2,
				arrows: false,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				variableWidth: true,
				centerMode: false,
			},
		},
	],
};

const cardData = [
	{
		id: 1,
		title: 'Graffiti Session for at Heaven Spot in Singapore',
		images: [
			'https://images.unsplash.com/photo-1604716053460-3f66248bf8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
			'https://images.unsplash.com/photo-1512952398228-c6bda07ac7b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
			'https://images.unsplash.com/photo-1472808900176-aa74f96048c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fEdyYWZmaXRpJTIwU2Vzc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60',
			'https://images.unsplash.com/photo-1473225071450-1f1462d5aa92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8R3JhZmZpdGklMjBTZXNzaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60',
		],
		rating: 4.7,
		city: 'Singapore',
	},
	{
		id: 2,
		title: '29Rooms Singapore: Lost and Found',
		images: [
			'https://images.unsplash.com/photo-1598258547955-844264b665bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
			'https://images.unsplash.com/photo-1417816491410-d61e1546e539?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
		],
		rating: 4.4,
		city: 'Singapore',
	},
	{
		id: 8,
		title: 'Jewelry Making Workshop by Artisan8 Studio',
		images: [
			'https://images.unsplash.com/photo-1617117811969-97f441511dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
			'https://images.unsplash.com/photo-1527345076281-3bb38ac4e6dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1967&q=80',
		],
		rating: 4.9,
		city: 'Singapore',
	},
	{
		id: 9,
		title: 'ArtScience Museum Singapore',
		images: [
			'https://images.unsplash.com/photo-1648366326683-9a61d1e6dc88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
			'https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
		],
		rating: 4.8,
		city: 'Singapore',
	},
	{
		id: 10,
		title: 'Singapore’s national museum of Asian antiquities and decorative art',
		images: [
			'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80',
			'https://images.unsplash.com/photo-1572953109213-3be62398eb95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
		],
		rating: 4.8,
		city: 'Singapore',
	},
];

interface refType {
	ref: MutableRefObject<Slider>;
}

const ExploreCards = forwardRef<any, refType>((props, ref) => {
	return (
		<Slider {...props} ref={ref} {...HomeExperiencesBannerSettings}>
			{cardData
				.slice(0, 5)
				.map((experienceDataItem: any, index: number) => {
					return (
						<Box key={index}>
							<Box sx={{ mx: 0.5 }}>
								<ExperiencesProductCard
									experienceData={experienceDataItem}
								/>
							</Box>
						</Box>
					);
				})}
		</Slider>
	);
});

ExploreCards.displayName = 'ExploreCards';

export default ExploreCards;
