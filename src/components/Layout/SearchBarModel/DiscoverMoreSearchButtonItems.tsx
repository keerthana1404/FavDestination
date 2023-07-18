import { Typography } from '@mui/material';
import { memo } from 'react';
import { DiscoverMoreSearchButtonType } from '../types/NavBarType';

interface DiscoverMoreSearchButtonItemsProps {
	DISCOVER_MORE_SEARCH_BUTTON: DiscoverMoreSearchButtonType[];
}

const DiscoverMoreSearchButtonItems = ({
	DISCOVER_MORE_SEARCH_BUTTON,
}: DiscoverMoreSearchButtonItemsProps) => {
	return (
		<>
			{DISCOVER_MORE_SEARCH_BUTTON.map((item) => {
				return (
					<Typography
						key={`DiscoverMoreSearchButtonItem-${item.name}-${item.id}`}
						variant="body2"
						sx={{
							boxShadow: '1px 1px 2px grey',
							borderRadius: 1,
							px: 1,
							py: 0.5,
							cursor: 'pointer',
							fontWeight: 'bold',
							color: 'grey',
						}}
					>
						{item.name}
					</Typography>
				);
			})}
		</>
	);
};

export default memo(DiscoverMoreSearchButtonItems);
