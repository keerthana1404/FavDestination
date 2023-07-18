import { Box, styled } from '@mui/material';

const StylesUmegoAppContainer = styled(Box)(() => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	textAlign: 'center',
	alignItems: 'center',
	gap: 3,
}));

const umegoAppImageSliderContainerStyle = {
	mt: { xs: 2, md: 4 },
	alignItems: 'center',
	justifyContent: 'center',
	'.slick-slide > div': {
		margin: '0 10px',
	},

	'.slick-list': {
		margin: '0 -10px',
	},
	'.slick-slide *': {
		outline: 'none',
	},
} as const;

const StyledUmegoAppPremiumMembersBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	gap: 1,
	[theme.breakpoints.up('md')]: {
		marginTop: '32px',
	},
	[theme.breakpoints.down('md')]: {
		marginTop: '16px',
	},
}));

export {
	StylesUmegoAppContainer,
	umegoAppImageSliderContainerStyle,
	StyledUmegoAppPremiumMembersBox,
};
