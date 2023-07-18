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

const iconStyle = {
	marginRight: '8px',
} as const;

const textStyle = {
	'& .MuiInputBase-root': {
		background: 'white',
		border: '2px solid #631D76',
		borderRadius: '16px',
		height: 50,
	},
	'& .MuiFilledInput-root.Mui-focused': {
		background: 'white !important',
		borderRadius: '16px !important',
		height: '50px !important',
		// border: '2px solid black',
	},
	'& .MuiFilledInput-root:hover': {
		background: 'white',
		borderRadius: '16px',
		height: 50,
		// border: '2px solid black',
	},
	'&:-webkit-autofill': {
		WebkitBoxShadow: '0 0 0 1000px white inset',
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
		borderRadius: '16px',
	},
} as const;

const orDevider = {
	flexGrow: 1,
	border: 1,
	borderColor: 'white',
	borderStyle: 'dashed',
} as const;

export { buttonStyle, iconStyle, textStyle, orDevider };
