import { styled } from '@mui/material';
import Image from 'next/image';

const StylesTopModelImageStyle = styled(Image)(({ theme }) => ({
	width: '100%',
	height: 'auto',

	[theme.breakpoints.up('md')]: {
		height: 'auto',
	},
	[theme.breakpoints.down('md')]: {
		height: '400px',
	},
}));

const PlayIconStyle = {
	clipPath: 'polygon(100% 50%, 0 0, 0 100%)',
	height: '80px',
	width: '80px',
	position: 'absolute',
	bgcolor: 'darkgrey',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	borderRadius: '4px',
};

const TopModelImageComponentContainerStyle = {
	borderRadius: { xs: '10px', md: '10px ' },
	overflow: 'hidden',
	height: '100%',
};

const shareButtonsStyle = {
	flexDirection: 'row',
	gap: '5px',
};

const TopModelImageComponentHeadingTypoStyle = {
	whiteSpace: {
		xs: 'wrap',
		xl: 'nowrap',
	},
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	mb: 0.5,
	color: 'primary.main',
	lineHeight: 1.1,
};

const TopModelImageComponentTypoStyle = {
	fontWeight: 'bold',
	fontSize: {
		xs: '16px',
		md: '18px',
		lg: '20px',
	},
};

const TopModelImageContentBoxStyle = {
	height: '100%',
	width: '100%',
	background:
		'linear-gradient(180deg, rgba(255,255,255,0) 23%, rgba(48,48,48,1) 100%)',
	position: 'absolute',
	top: 0,
	zIndex: 1,
};

const ArrowBackIconStyle = {
	fontSize: { xs: '24px', md: '34px' },
	background: 'rgba(0,0,0,0.2)',
	borderRadius: '100%',
	cursor: 'pointer',
	p: 1,
};

const TopIconWrapperStyle = {
	display: 'flex',
	justifyContent: 'space-between',
	p: { xs: 2, md: 4 },
	boxSizing: 'border-box',
};

const TopIconFabStyle = {
	zIndex: 3,
	cursor: 'pointer',
	background: 'rgba(0,0,0,0.2)',
	'&:hover': {
		background: 'rgba(0,0,0,0.2)',
	},
};

const TopModelImageBoxStyle = {
	display: 'flex',
	position: 'relative',
	height: { xl: '570px', lg: '530px', md: '450px', sm: '400px' },
};

const TopModelImageLeftSideMediaStyle = {
	height: '85px',
	position: 'absolute',
	width: '68px',
};

const TopModelExperienceHeadingWrapperStyle = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
};

const TopModelExperienceHeadingStyle = {
	color: '#1c1c1c',
	fontSize: '26px',
	fontWeight: '600',
	lineHeight: '26px',
	whiteSpace: 'nowrap',
	marginTop: '23px',
};

const TopModelExperienceHeadingStarStyle = {
	height: '16px',
	width: '16px',
	marginLeft: '15px',
	display: 'inline',
	marginRight: '7px',
};

const TopModelExperienceHeadingReviewStyle = {
	fontSize: '16px',
	fontWeight: '400',
	lineHeight: '16px',
	whiteSpace: 'nowrap',
	display: 'flex',
	justifyContent: 'start',
	alignItems: 'center',
};

const TopModelExperienceSubHeadingReviewStyle = {
	marginLeft: '5px',
	color: '#1c1c1c',
	fontWeight: '500',
};
const TopModelExperienceSubHeadingReviewLinkStyle = {
	color: '#631D76',
	textDecoration: 'underline',
	margin: '5px',
};

const TopModelExperienceBreadcrumbsTextStyle = {
	marginTop: { xs: '12px', md: '20px', lg: '30px' },
	color: '#898989',
	fontSize: '16px',
	fontWeight: '400',
	height: '19px',
};

const TopModelImageBoxGalleryBoxStyle = {
	position: 'absolute',
	background: 'darkgrey',
	borderRadius: '5px',
	bottom: '40px',
	right: '30px',
	overflow: 'hidden',
	fontSize: '16px',
	boxShadow: '4px 4px 4px 4px rgba(0,0,0,0.5)',
	'&:hover': {
		background: 'silver',
	},
};

export {
	ArrowBackIconStyle,
	PlayIconStyle,
	StylesTopModelImageStyle,
	TopIconFabStyle,
	TopIconWrapperStyle,
	TopModelExperienceBreadcrumbsTextStyle,
	TopModelExperienceHeadingReviewStyle,
	TopModelExperienceHeadingStarStyle,
	TopModelExperienceHeadingStyle,
	TopModelExperienceSubHeadingReviewLinkStyle,
	TopModelExperienceHeadingWrapperStyle,
	TopModelExperienceSubHeadingReviewStyle,
	TopModelImageBoxGalleryBoxStyle,
	TopModelImageBoxStyle,
	shareButtonsStyle,
	TopModelImageComponentContainerStyle,
	TopModelImageComponentHeadingTypoStyle,
	TopModelImageComponentTypoStyle,
	TopModelImageContentBoxStyle,
	TopModelImageLeftSideMediaStyle,
};
