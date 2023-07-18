import NavBarComponentLinkSelector from '../NavBarComponentLinkSelector';
import {
	StyledNavLink,
	StyledNavLinkItemContainer,
	StyledNavLinkTypography,
} from '../styles/NavLinkStyles';
import { LinksTypeItem } from '../types/NavBarType';

export interface NavLinkProps {
	item: LinksTypeItem;
	activeLink: string;
}

const NavLink = ({ item, activeLink }: NavLinkProps) => {
	const isBadgeActive = item.label === 'Menu';
	const isPng = typeof item.icon === 'string';
	const isActiveLink = activeLink === item.label.toLocaleLowerCase();
	const isLabelExperience = item.label === 'Experiences';

	return (
		<StyledNavLinkItemContainer>
			<StyledNavLink
				href={isLabelExperience ? '/' : item.label.toLowerCase()}
				isActiveLink={isActiveLink}
			>
				<NavBarComponentLinkSelector
					icon={item.icon}
					label={item.label}
					isBadgeActive={isBadgeActive}
				/>

				<StyledNavLinkTypography
					variant="body1"
					sx={{
						color: isActiveLink ? 'seondary' : 'grey',
					}}
					color="secondary"
					isPng={isPng}
				>
					{item.label}
				</StyledNavLinkTypography>
			</StyledNavLink>
		</StyledNavLinkItemContainer>
	);
};

export default NavLink;
