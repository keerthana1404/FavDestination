import { Box, InputLabel, styled } from '@mui/material';

const StyledFormFieldBoxWrapper = styled(Box)(() => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	margin: 'auto',
}));

const StyledFormFieldBox = styled(Box)(() => ({
	display: 'flex',
	flexDirection: 'column',
}));

const StyledInputLabel = styled(InputLabel)(() => ({
	marginBottom: '7px',
	marginLeft: '2px',
	fontWeight: 'bolder',
}));

const formFieldButtonStyle = {
	fontWeight: 'bold',
	margin: '0 auto',
	borderRadius: 4,
	mt: 4,
};

const textStyle = {
	'& .MuiInputBase-root': {
		background: 'white',
		boxShadow: '0 4px 30px #00000025',
		borderRadius: '50px',
		height: 50,
	},
	'& .MuiFilledInput-root.Mui-focused': {
		background: 'white',
		borderRadius: '50px',
		height: 50,
	},
	'& .MuiFilledInput-root:hover': {
		background: 'white',
		borderRadius: '50px',
		height: 50,
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

const textAreaStyle = {
	'& .MuiInputBase-root': {
		background: 'white',
	},
	boxShadow: '0 4px 30px #00000025',
	borderRadius: '30px',
	'& .MuiFilledInput-root.Mui-focused': {
		background: 'white',
		borderRadius: '16px',
	},
	'& .MuiFilledInput-root:hover': {
		background: 'white',
		borderRadius: '16px',
	},
	'& .MuiFormLabel-root': {
		// color: 'primary.contrastText',
		fontSize: '12px',
	},
	'& .MuiFormLabel-root.Mui-focused': {
		color: 'primary.contrastText',
	},
	'& .MuiFilledInput-input': {
		backgroundClip: 'text !important',
		// borderRadius: '16px',
		paddingTop: '9px',
	},
} as const;

export {
	StyledFormFieldBoxWrapper,
	StyledFormFieldBox,
	StyledInputLabel,
	formFieldButtonStyle,
	textStyle,
	textAreaStyle,
};
