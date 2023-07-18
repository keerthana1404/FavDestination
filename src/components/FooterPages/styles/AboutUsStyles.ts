import { Box, styled, Typography } from '@mui/material';

const StyledAboutUsContainer = styled(Box)(() => ({
	display: 'flex',
	gap: 4,
}));

const StyledAboutUsParagraphContainer = styled(Box)(({ theme }) => ({
	flex: 1,
	display: 'flex',
	justifyContent: 'center',
	flexDirection: 'column',
	boxSizing: 'border-box',
	[theme.breakpoints.up('md')]: {
		padding: 0,
	},
	[theme.breakpoints.down('md')]: {
		padding: '16px',
	},
}));

const StyledAboutUsImageContainer = styled(Box)(({ theme }) => ({
	flex: 1,
	[theme.breakpoints.up('md')]: {
		display: 'flex',
	},
	[theme.breakpoints.down('md')]: {
		display: 'none',
	},
}));

const StyledAboutUsImage = styled(Box)(() => ({
	position: 'relative',
	overflow: 'hidden',
	display: 'inline-block',
}));

const StyledAboutUsImageGradiantBox = styled(Box)(() => ({
	position: 'absolute',
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
}));

const StyledAboutUsBoxParagraph = styled(Typography)(() => ({
	marginBottom: '16px',
	fontSize: '16px',
}));

const StyledAboutUsUmegoAppContainer = styled(Box)(() => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#00000099',
}));

const AboutUsButtonStyle = {
	fontWeight: 'bold',
	borderRadius: '50px',
	py: 1,
	px: 3,
	'&:hover': {
		color: 'primary.main',
		bgcolor: 'secondary.main',
	},
} as const;

export {
	StyledAboutUsContainer,
	StyledAboutUsParagraphContainer,
	StyledAboutUsImageContainer,
	StyledAboutUsImage,
	StyledAboutUsImageGradiantBox,
	StyledAboutUsBoxParagraph,
	StyledAboutUsUmegoAppContainer,
	AboutUsButtonStyle,
};
