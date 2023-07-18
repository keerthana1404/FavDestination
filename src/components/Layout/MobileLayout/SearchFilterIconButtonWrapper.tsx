import { IconButton } from '@mui/material';
import { ReactNode } from 'react';

interface MyComponentProps {
	onClick: () => void;
}
interface SearchFilterIconButtonWrapper {
	children: ReactNode;
	handleClick: MyComponentProps['onClick'];
}

const SearchFilterIconButtonWrapper = ({
	children,
	handleClick,
}: SearchFilterIconButtonWrapper) => {
	return (
		<>
			<IconButton
				sx={{
					bgcolor: 'white',
					outline: '2px solid #E9E9E9',
					height: '33px',
					width: '33px',
					position: 'absolute',
					right: '5px',
				}}
				color="inherit"
				onClick={handleClick}
			>
				{children}
			</IconButton>
		</>
	);
};

export default SearchFilterIconButtonWrapper;
