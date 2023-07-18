import { footerLinkType } from '../types/FooterLinksType';

const FIRST_ROW: footerLinkType[] = [
	{
		id: 1,
		label: 'About Us',
		href: '/about_us',
	},
	{
		id: 2,
		label: 'Contact Us',
		href: '/contact_us',
	},
	// {
	// 	id: 3,
	// 	label: 'Blog',
	// 	href: '/blogs',
	// },
	// {
	// 	id: 4,
	// 	label: 'Help',
	// 	href: '/help',
	// },
];

const SECOND_ROW: footerLinkType[] = [
	{
		id: 1,
		label: 'Become an experience partner',
		href: '/become_a_vendor',
	},
	// {
	// 	id: 2,
	// 	label: 'Careers',
	// 	href: '/careers',
	// },
	{
		id: 2,
		label: 'Gift card',
		href: '/gift_cards',
	},
];

const THIRD_ROW: footerLinkType[] = [
	{
		id: 1,
		label: 'Blogs',
		href: '/blogs',
	},
	// {
	// 	id: 1,
	// 	label: 'Terms of Service',
	// 	href: '/terms_and_conditions',
	// },
	// {
	// 	id: 2,
	// 	label: 'Privacy Policy',
	// 	href: '/privacy_policy',
	// },
];

export { FIRST_ROW, SECOND_ROW, THIRD_ROW };
