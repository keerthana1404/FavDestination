import { MOBILE_BAR_LINKS } from '@components/Layout/constants/NavigationLinksData';
import { Box } from '@mui/material';
import { useState } from 'react';
import MobileLayoutNavigationBar from './MobileLayoutNavigationBar';
import MobileLayoutSearch from './MobileLayoutSearch';

const MobileLayout = () => {
	const [isSearchFocus, setIsSearchFocus] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	return (
		<>
			<Box display="flex" justifyContent={'center'}>
				<MobileLayoutSearch
					isSearchFocus={isSearchFocus}
					setIsSearchFocus={setIsSearchFocus}
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>
			</Box>
			<MobileLayoutNavigationBar links={MOBILE_BAR_LINKS} />
		</>
	);
};

export default MobileLayout;
