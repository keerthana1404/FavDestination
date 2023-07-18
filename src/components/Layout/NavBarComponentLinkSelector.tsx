import { iconsStyle } from '@components/styles/ComponentsStyles';
import {
	StyledExperiencesIcon,
	StyledMenuExperiencesIcon,
} from './styles/LayoutStyles';

interface NavBarComponentLinkSelectorProp {
	icon: any;
	label: string;
	isBadgeActive: boolean;
}

const NavBarComponentLinkSelector = ({
	icon: Icon,
	label,
	isBadgeActive,
}: NavBarComponentLinkSelectorProp) => {
	const isPng = typeof Icon.src === 'string';

	if (isPng && !label) {
		return (
			<StyledMenuExperiencesIcon
				width={28.9}
				height={20}
				src={Icon?.src}
				alt="Icon"
			/>
		);
	}

	if (isPng) {
		return (
			<StyledExperiencesIcon
				width={28.9}
				height={20}
				src={Icon?.src}
				alt="Icon"
			/>
		);
	}

	return (
		<Icon
			sx={{ ...iconsStyle, color: isBadgeActive ? 'secondary' : 'grey' }}
		/>
	);
};

export default NavBarComponentLinkSelector;
