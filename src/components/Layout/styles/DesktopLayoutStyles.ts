import { AppBar, Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledDesktopAppbar = styled(AppBar)(({ theme }) => ({
	padding: '2px 0',
	boxShadow: '1px 1px 2px #ccc',
	[theme.breakpoints.up('md')]: {
		display: 'block',
	},
	[theme.breakpoints.down('md')]: {
		display: 'none',
	},
}));

const desktopBarImageContainerStyle = {
	flex: { md: 1, lg: 2 },
	display: 'flex',
	justifyContent: 'flex-start',
	alignItems: 'center',
} as const;

const desktopBarSearchAndFilterContainerStyle = {
	flex: {
		md: 3,
		lg: 5,
	},
	display: 'flex',
	justifyContent: {
		md: 'center',
		lg: 'space-evenly',
	},
	alignItems: 'center',
	gap: { md: '20px', lg: '30px', xl: '40px' },
	position: 'relative',
} as const;

const desktopBarNavLinksContainerStyle = {
	flex: 2,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	gap: { md: '22px', lg: '30px', xl: '40px' },
} as const;

const StyledDesktopLayoutIconsWrapper = styled(Stack)(() => ({
	justifyContent: 'center',
	alignItems: 'center',
}));

// Country Box
const StyledDropdownBoxWrapper = styled(Box)<{ ismodalopen: boolean }>(
	({ ismodalopen }) => ({
		width: '100%',
		height: '100vh',
		position: 'absolute',
		top: -7,
		zIndex: 2,
		left: 0,
		display: ismodalopen ? 'block' : 'none',
	}),
);

const StyledDropdownBox = styled(Box)<{ ismodalopen: boolean }>(
	({ theme, ismodalopen }) => ({
		background: 'white',
		position: 'absolute',
		boxShadow: '2px 2px 5px grey',
		top: '70px',
		right: 10,
		userSelect: 'none',
		borderRadius: 6,
		padding: '10px',
		display: ismodalopen ? 'flex' : 'none',
		flexWrap: 'wrap',
		gap: 2,
		justifyContent: 'center',
		alignContent: 'center',
		[theme.breakpoints.up('md')]: {
			width: '200px',
		},
		[theme.breakpoints.up('lg')]: {
			width: '300px',
		},
	}),
);

const StyledChip = styled(Box)(() => ({
	border: '1px solid #631D76',
	borderRadius: '14px',
	position: 'relative',
}));

const iconStyle = {
	fontSize: {
		md: '26px',
		lg: '30px',
	},
};

const dropdownMapContainerStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	borderRadius: 40,
	gap: '5px',
	px: { md: 1, lg: 2 },
	boxShadow: '4px 4px 8px #E9E9E9',
	height: '40px',
	width: '100%',
	boxSizing: 'border-box',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	cursor: 'pointer',
	outline: '2px solid #E9E9E9',
	userSelect: 'none',
} as const;

export {
	StyledDesktopAppbar,
	desktopBarImageContainerStyle,
	desktopBarNavLinksContainerStyle,
	desktopBarSearchAndFilterContainerStyle,
	StyledDesktopLayoutIconsWrapper,
	StyledDropdownBoxWrapper,
	StyledDropdownBox,
	StyledChip,
	iconStyle,
	dropdownMapContainerStyle,
};
