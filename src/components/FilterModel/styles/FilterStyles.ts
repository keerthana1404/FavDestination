import { Slider, styled } from '@mui/material';

const AirbnbSlider = styled(Slider)(({ theme }) => ({
	color: theme.palette.secondary.main,
	height: 3,
	padding: '13px 0',
	marginTop: 10,

	'& .MuiSlider-thumb': {
		height: 27,
		width: 27,
		backgroundColor: '#fff',
		border: '1px solid currentColor',
		'&:hover': {
			boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
		},
		'& .airbnb-bar': {
			height: 9,
			width: 1,
			backgroundColor: 'currentColor',
			marginLeft: 1,
			marginRight: 1,
		},
	},
	'& .MuiSlider-track': {
		height: 3,
	},
	'& .MuiSlider-rail': {
		color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#C7C7F5',
		opacity: theme.palette.mode === 'dark' ? undefined : 1,
		height: 3,
	},
}));

export { AirbnbSlider };
