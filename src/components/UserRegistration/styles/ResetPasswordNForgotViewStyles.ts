const baseContainerStyles = {
	backgroundSize: 'cover',
	display: 'flex',
	justifyContent: 'center',
	alignItem: 'center',
	minHeight: '80vh',
} as const;

const forgotNResetPasswordLayoutImageContainer = {
	width: '100%',
	height: '100%',
	position: 'absolute',
	zIndex: -1,
} as const;

export { baseContainerStyles, forgotNResetPasswordLayoutImageContainer };
