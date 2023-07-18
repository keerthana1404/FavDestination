import { Box, Typography, styled } from '@mui/material';

const textStyle = {
	'& .MuiInputBase-root': {
		background: 'white',
		boxShadow: '0 4px 30px #00000025',
		border: '1px solid rgba(0, 0, 0, 0.20)',
		borderRadius: '50px',
		height: '44px',
	},
	'& .MuiFilledInput-root.Mui-focused': {
		background: 'white',
		borderRadius: '50px',
		border: '1px solid rgba(0, 0, 0, 0.20)',
		height: '44px',
	},
	'& .MuiFilledInput-root:hover': {
		background: 'white',
		borderRadius: '50px',
		border: '1px solid rgba(0, 0, 0, 0.20)',
		height: '44px',
	},
	'& .MuiFormLabel-root': {
		color: 'primary.contrastText',
		fontSize: '12px',
	},
	'& .MuiFormLabel-root.Mui-focused': {
		color: 'primary.contrastText',
	},
	'& .MuiFilledInput-input': {
		backgroundClip: 'text !important',
		borderRadius: '50px',
		paddingTop: '7px',
	},
} as const;
const buttonStyle = {
	borderRadius: '25px',
	padding: '0 25px',
	textTransform: 'uppercase',
	background: 'linear-gradient(180deg, #631D76 0%, #631D76 100%)',
	color: 'white',
	height: '44px',
	fontSize: { xl: '17.5px' },
} as const;

const StylesEmailFooterBackground = {
	position: 'absolute',
	top: 0,
	width: '100%',
	height: { xs: '255px', md: '265px' },
	zIndex: -1,
	borderRadius: '20px',
	border: '0.5px solid #201A23',
	background: 'linear-gradient(90deg, #631D76 0%, #9E4770 100%)',
};

const StylesEmailFooterContent = {
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyItems: 'center',
	textAlign: 'center',
};

const StyledEmailFooterText = styled(Typography)(({ theme }) => ({
	fontWeight: '600',
	color: theme.palette.primary.main,
	paddingBottom: 0,
}));

const StyledEmailFooterTextH6 = styled(Typography)(({ theme }) => ({
	fontSize: '16px',
	color: theme.palette.primary.main,
}));

const StyledLineContainer = styled(Box)(() => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100%',
}));

const StylesEmailAddressContainer = {
	width: { sm: '400px', md: '500px' },
	height: { xs: '34px', md: '40px' },
	display: 'flex',
	marginTop: '20px !important',
	padding: '10px',
	alignItems: 'center',
	background: 'white',
	margin: '0 auto',
	borderRadius: '100px',
	gap: 1,
	boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.25)',
};

export {
	textStyle,
	buttonStyle,
	StylesEmailFooterBackground,
	StylesEmailFooterContent,
	StyledEmailFooterText,
	StyledEmailFooterTextH6,
	StyledLineContainer,
	StylesEmailAddressContainer,
};
