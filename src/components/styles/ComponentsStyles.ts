import { Box, Card, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const ComponentHeadingTypographyWrapper = styled(Stack)(() => ({
	flexDirection: 'row',
	gap: '10px',
	alignItems: 'center',
}));

const ExperienceItemBodyTypography = styled(Typography)(({ theme }) => ({
	variant: 'body1',
	color: theme.palette.primary.main,
	fontWeight: 'bold',
}));

const BoxOutlinedContainerLayout = styled(Card)(() => ({}));

const StyledMainHeadingComponentWrapper = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	mb: { xs: 2, md: 3 },
	[theme.breakpoints.up('md')]: {
		marginBottom: '24px',
	},
	[theme.breakpoints.down('md')]: {
		marginBottom: '16px',
	},
}));

const StyledMainHeading = styled(Typography)(({ theme }) => ({
	fontWeight: 'bolder',
	color: theme.palette.secondary.main,
	[theme.breakpoints.up('xl')]: {
		fontSize: '34px',
	},
	[theme.breakpoints.down('xl')]: {
		fontSize: '32px',
	},
	[theme.breakpoints.down('md')]: {
		fontSize: '28px',
	},
	[theme.breakpoints.down('sm')]: {
		fontSize: '26px',
	},
}));

const ComponentHeadingTypography = styled(Typography)(({ theme }) => ({
	color: 'grey',
	fontWeight: 'bold',
	[theme.breakpoints.up('xl')]: {
		fontSize: '24px',
	},
	[theme.breakpoints.down('xl')]: {
		fontSize: '24px',
	},
	[theme.breakpoints.down('md')]: {
		fontSize: '22px',
	},
	[theme.breakpoints.down('sm')]: {
		fontSize: '20px',
	},
}));

const iconsStyle = {
	fontSize: { md: '26px', lg: '30px' },
	fontWeight: 'bold',
	stroke: '#4144EB',
	strokeWidth: 0.2,
} as const;

const homeExperienceIconsStyle = {
	color: 'secondary.main',
	fontSize: { md: '26px', lg: '30px' },
	fontWeight: 'bold',
	stroke: '#4144EB',
	strokeWidth: 0.2,
} as const;

export {
	iconsStyle,
	ComponentHeadingTypographyWrapper,
	ComponentHeadingTypography,
	StyledMainHeading,
	StyledMainHeadingComponentWrapper,
	ExperienceItemBodyTypography,
	homeExperienceIconsStyle,
	BoxOutlinedContainerLayout,
};
