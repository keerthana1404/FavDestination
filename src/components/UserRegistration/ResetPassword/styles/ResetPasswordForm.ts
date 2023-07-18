const buttonStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: '18px',
	marginBottom: '10px',
	textTransform: 'none',
	border: '2px solid',
	width: '100%',
	maxWidth: '560px',
} as const;

const iconStyle = {
	marginRight: '8px',
} as const;

const textStyle = {
	maxWidth: '560px',
	'& .MuiInputBase-root': {
		background: 'white',
		border: '2px solid #631D76',
		borderRadius: '16px',
		height: 50,
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
	marginBottom: '7px',
	'& .MuiFormLabel-root': {
		color: 'primary.contrastText',
		fontSize: '12px',
	},
	'& .MuiFormLabel-root.Mui-focused': {
		color: 'primary.contrastText',
	},
} as const;

export { buttonStyle, iconStyle, textStyle };
