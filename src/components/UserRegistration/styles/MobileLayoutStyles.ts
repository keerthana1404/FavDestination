const MobileLayoutContainerStyles = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	minHeight: '100%',
	textAlign: 'center',
	mt: 12,
	mb: 5,
} as const;

const MobileLayoutLogoContainerStyles = {
	display: 'flex',
	justifyContent: 'center',
	marginBottom: '1rem',
} as const;

const MobileLayoutGoogleButtonContainerStyles = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
} as const;

const MobileLayoutORLayoutContainerStyles = {
	marginTop: '10px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
} as const;

export {
	MobileLayoutContainerStyles,
	MobileLayoutGoogleButtonContainerStyles,
	MobileLayoutLogoContainerStyles,
	MobileLayoutORLayoutContainerStyles,
};
