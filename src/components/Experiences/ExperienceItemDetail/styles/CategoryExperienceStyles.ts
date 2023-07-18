import { Box, Typography, styled } from '@mui/material';

export const StylesExperienceCard = {
	boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.15)',
	cursor: 'pointer',
	borderRadius: '10px',
	textAlign: 'left',
};

export const StylesDiscountText = {
	position: 'absolute',
	top: '14px',
	left: '14px',
	background: '#ff305a',
	padding: '7px',
	borderRadius: '3px',
	color: '#fff',
};

export const StylesPackageText = {
	position: 'absolute',
	bottom: '14px',
	left: '14px',
	backgroundColor: 'secondary.main',
	padding: '7px',
	borderRadius: '3px',
	color: 'primary.main',
};

export const StylesCardTitle = {
	fontWeight: 'bold',
};

export const StylesCardMedia = {
	borderBottomLeftRadius: '10px',
	borderBottomRightRadius: '10px',
};

export const StylesCardContent = {
	padding: '12px',
	paddingBottom: '12px !important',
};

export const StylesPriceContainer = {
	display: 'flex',
	gap: 1,
};

export const StylesTitleContainer = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
};

export const StylesDiscountPrice = {
	// color: 'grey',
	fontWeight: 'bold',
};

export const StylesActualPrice = {
	color: 'GrayText',
	fontWeight: 'bold',
	textDecoration: 'line-through',
};

export const StylesLocationContainer = {
	display: 'flex',
	gap: 1,
	// color: 'GrayText',
	alignItems: 'center',
	fontWeight: 'bold',
};

export const StylesRatingContainer = {
	display: 'flex',
	gap: 0.7,
	alignItems: 'center',
	color: '#686868',
};

export const textStyle = {
	maxWidth: '320px',
	'& .MuiInputBase-root': {
		background: 'white',
		border: '2px solid grey',
		height: 50,
	},
	'& .MuiFilledInput-root.Mui-focused': {
		background: 'white',
		height: 50,
	},
	'& .MuiFilledInput-root:hover': {
		background: 'white',
		height: 50,
	},
	marginBottom: '7px',
	'& .MuiFormLabel-root': {
		color: 'primary.contrastText',
		fontSize: '12px',
	},
	'& .MuiFormLabel-root.Mui-focused': {
		color: 'primary.contrastText',
	},
	'& .MuiFilledInput-input': {
		backgroundClip: 'text !important',
		paddingTop: '7px !important',
	},
};

export const StylesFilterContainer = {
	backgroundColor: '#f6f6f6',
	padding: '20px 16px',
	display: 'flex',
	flexDirection: 'column',
	gap: 1,
};

export const StylesClearFilterText = {
	textAlign: 'right',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'right',
	color: 'GrayText',
	cursor: 'pointer',
};

export const StyledH6Content = styled(Typography)(() => ({
	fontWeight: 'bold',
	fontSize: '1.25rem',
}));

export const GreyContent = styled(Typography)(() => ({
	fontSize: '16px',
	color: '#686868',
}));

export const GreyContentBold = styled(Typography)(() => ({
	fontWeight: 600,
	fontSize: '20px',
	'-webkit-line-clamp': '2',
	'-webkit-box-orient': 'vertical',
	display: '-webkit-box',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	height: '60px',
}));

export const StyleHeartContainer = styled(Box)(() => ({
	position: 'absolute',
	right: '12px',
	top: '12px',
	width: '45px',
	height: '45px',
	padding: 0,
	display: 'grid',
	placeItems: 'center',
	borderRadius: '50%',
	backgroundColor: 'rgba(0, 0, 0, 0.4)',
}));
