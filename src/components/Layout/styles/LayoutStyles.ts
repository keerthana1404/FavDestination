import { Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

const StyledToolbar = styled(Toolbar)(() => ({
	display: 'flex',
}));

const StyledExperiencesIcon = styled(Image)(({ theme }) => ({
	padding: '0.5px 0',
	width: '28.9px',
	height: '20px',
	[theme.breakpoints.up('sm')]: {
		padding: '2.1px 0',
		width: '28.9px',
		height: '20px',
	},
	[theme.breakpoints.up('lg')]: {
		width: '35px',
		height: '24px',
		padding: '2.1px 0',
	},
}));

const StyledMenuExperiencesIcon = styled(Image)(({ theme }) => ({
	padding: '0.5px 0',
	width: '28.9px',
	height: '20px',
	[theme.breakpoints.up('sm')]: {
		padding: '2.1px 0',
		width: '28.9px',
		height: '20px',
	},
	[theme.breakpoints.up('lg')]: {
		width: '74px',
		height: '45px',
		padding: '2.1px 0',
	},
}));

// Search Model Box
const searchBarModelContainerStyle = {
	width: { xs: '100%', md: '90%' },
	height: { xs: '620px', md: '540px' },
	overflow: 'hidden',
	bgcolor: 'white',
	position: { xs: 'fixed', md: 'absolute' },
	left: { md: 24, lg: 40 },
	top: 55,
	borderRadius: { xs: 0, md: 3 },
	boxShadow: '1px 1px 5px grey',
	p: 2,
	boxSizing: 'border-box',
	zIndex: 5,
} as const;

const searchIconAreaStyle = {
	position: 'relative',
} as const;

const modalBoxStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '70%',
	maxHeight: '60%',
	overflow: 'auto',
	bgcolor: 'background.paper',
	boxShadow: 24,
	borderRadius: 2,
	p: 2,
	'&:focus': {
		outline: 'none',
	},
} as const;

const searchBarStyle = {
	backgroundColor: 'white',
	borderRadius: 40,
	color: 'grey',
	outline: '2px solid #E9E9E9',
	boxShadow: '1px 1px 2px #E9E9E9',
	'& fieldset': { border: 'none' },
	zIndex: 2,
	input: {
		color: 'grey',
		overflow: 'none',
		textOverflow: 'ellipsis',
		'&::placeholder': {
			color: 'grey',
			opacity: 1,
			fontSize: { sx: '14px' },
		},
	},
} as const;

export {
	StyledToolbar,
	StyledExperiencesIcon,
	StyledMenuExperiencesIcon,
	searchBarModelContainerStyle,
	searchIconAreaStyle,
	modalBoxStyle,
	searchBarStyle,
};
