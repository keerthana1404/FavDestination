import ExperienceLogo from '@assets/ExperienceLogo.png';
import { Links } from '@components/Layout/types/NavBarType';

const MOBILE_BAR_LINKS: Links = [
	{
		id: 1,
		icon: ExperienceLogo,
		label: 'Experiences',
	},
	// {
	// 	id: 2,
	// 	icon: FavoriteBorderIcon,
	// 	label: 'Community',
	// },

	// {
	// 	id: 3,
	// 	icon: PeopleOutlineIcon,
	// 	label: 'People',
	// },
	// {
	// 	id: 4,
	// 	icon: ChatIcon,
	// 	label: 'Chat',
	// },
];

const TOP_BAR_LINKS: Links = [
	{
		id: 1,
		icon: ExperienceLogo,
		label: 'Experiences',
	},
	// {
	// 	id: 2,
	// 	icon: FavoriteBorderIcon,
	// 	label: 'Community',
	// },
	// {
	// 	id: 3,
	// 	icon: PeopleOutlineIcon,
	// 	label: 'People',
	// },
];

export { MOBILE_BAR_LINKS, TOP_BAR_LINKS };
