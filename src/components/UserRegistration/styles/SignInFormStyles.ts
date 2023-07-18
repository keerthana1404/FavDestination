const signInFormContainerStyle = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: { xs: 'center', md: 'center' },
	textAlign: 'center',
	height: '100%',
	mt: { md: 10 },
} as const;

const buttonStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: '18px',
	marginBottom: '10px',
	textTransform: 'none',
	border: '2px solid',
	width: '100%',
	height: '42px',
} as const;

const textStyle = {
	'& .MuiInputBase-root': {
		background: 'white',
		border: '2px solid #631D76',
		borderRadius: '16px',
		height: 50,
		width: '100%!important',
	},
	'& .MuiFilledInput-root.Mui-focused': {
		background: 'white',
		borderRadius: '16px',
		height: 50,
	},
	'& .MuiFilledInput-root:hover': {
		background: 'white',
		borderRadius: '16px',
		height: 50,
	},
	marginBottom: '10px',
	'& .MuiFormLabel-root': {
		color: 'primary.contrastText',
	},
	'& .MuiFormLabel-root.Mui-focused': {
		color: 'primary.contrastText',
	},
	'& .MuiFilledInput-input': {
		backgroundClip: 'text !important',
		borderRadius: '16px',
		width: '100%!important',
	},
} as const;

const iconStyle = {
	marginRight: '8px',
} as const;

export { signInFormContainerStyle, buttonStyle, iconStyle, textStyle };
