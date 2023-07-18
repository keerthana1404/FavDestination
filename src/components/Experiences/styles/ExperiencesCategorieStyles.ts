import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { StyledCategoryLinkProp } from '../types/ExperiencesCategorieTypes';

const experiencesCategorieContainerStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	borderBottom: '1px solid #F5F5F5',
	height: '70px',
	mt: { xs: 0.3, md: 1.5, lg: 2 },
};

const filterButtonStyle = {
	border: '1px solid grey',
	color: 'grey',
	borderRadius: 40,
	fontSize: 14,
} as const;

const StyledFilterButtonLayoutWrapper = styled(Box)(({ theme }) => ({
	height: '100%',
	pl: 2,
	justifyContent: 'center',
	alignItems: 'center',
	flexBasis: '10%',
	borderLeft: '1px solid #F5F5F5',
	display: 'flex',
	[theme.breakpoints.down('md')]: {
		display: 'none',
	},
}));

const StyledExperienceCategoryLayoutWrapper = styled(Box)(() => ({
	height: '100%',
	flexBasis: '100%',
	display: 'flex',
	alignItems: 'center',
	overflowX: 'auto',
	overflowY: 'hidden',
	scrollBehavior: 'smooth',
	scrollbarWidth: 'none',
	'&::-webkit-scrollbar': {
		display: 'none',
	},
}));

const StyledCategoryLinkWrapper = styled(Box)(({ theme }) => ({
	flex: '0 0 auto',
	height: '85%',
	[theme.breakpoints.up('xs')]: {
		width: '85px',
	},
	[theme.breakpoints.up('sm')]: {
		width: '110px',
	},
	[theme.breakpoints.up('md')]: {
		width: '140px',
	},
	[theme.breakpoints.up('lg')]: {
		width: '170px',
	},
}));

//

const StyledCategoryLink = styled(Link)<StyledCategoryLinkProp>(
	({ theme, isactivelink }) => ({
		textDecoration: 'none',
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		borderBottom: isactivelink ? '2px solid #631D76' : '',
		justifyContent: 'center',
		[theme.breakpoints.up('lg')]: {
			justifyContent: 'flex-start',
		},
	}),
);

export {
	experiencesCategorieContainerStyle,
	StyledFilterButtonLayoutWrapper,
	StyledExperienceCategoryLayoutWrapper,
	StyledCategoryLinkWrapper,
	StyledCategoryLink,
	filterButtonStyle,
};
