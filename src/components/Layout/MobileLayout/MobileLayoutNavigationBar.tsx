import NavigationLinksLayout from '@components/Layout/NavigationLinksLayout';
import { memo } from 'react';
import { StyledToolbar } from '../styles/LayoutStyles';
import { StyledMobileAppBar } from '../styles/MobileLayoutStyles';
import { Links } from '../types/NavBarType';

interface MobileLayoutNavigationBarProps {
	links: Links;
}

const MobileLayoutNavigationBar = ({
	links,
}: MobileLayoutNavigationBarProps) => {
	return (
		<>
			<StyledMobileAppBar>
				<StyledToolbar
					sx={{
						justifyContent: 'space-between',
						px: 1,
					}}
				>
					<NavigationLinksLayout links={links} />
				</StyledToolbar>
			</StyledMobileAppBar>
		</>
	);
};

export default memo(MobileLayoutNavigationBar);
