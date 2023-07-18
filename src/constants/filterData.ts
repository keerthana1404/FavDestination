import { CountryDataType } from '@components/Layout/types/NavBarType';

const COUNTRY_DATA: CountryDataType[] = [
	{
		id: 1,
		label: 'United States',
		img: 'https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320',
	},
	{
		id: 2,
		label: 'Singapore',
		img: 'https://a0.muscache.com/im/pictures/702a2bb3-f14d-4268-ac26-18b050eaf2ba.jpg?im_w=320',
	},
	{
		id: 3,
		label: 'Turkey',
		img: 'https://a0.muscache.com/im/pictures/97d76097-22b3-4d87-9459-ad1b90b18d2f.jpg?im_w=320',
	},
	{
		id: 4,
		label: 'Indonasia',
		img: 'https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320',
	},
];

const RATING_DATA: number[] = [4, 3, 2, 1];

const AGELIMIT_AND_TYPEDATA: string[] = [
	'For families',
	'For her',
	'For him',
	'For Kids',
	'18+',
	'21+',
];

export { COUNTRY_DATA, RATING_DATA, AGELIMIT_AND_TYPEDATA };
