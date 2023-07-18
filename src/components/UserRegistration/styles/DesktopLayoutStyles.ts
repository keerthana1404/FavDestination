const DesktopLayoutContainerStyle = {
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-evenly',
	gap: { md: 0, lg: 5, xl: 10 },
} as const;

const DesktopLayoutLeftSideContainerStyle = {
	minHeight: '500px',
	flex: 1,
	alignContent: 'center',
	display: 'flex',
	mt: 20,
	mb: 8,
} as const;

const DesktopLayoutRightSideContainerStyle = {
	flex: 1,
} as const;

const DesktopLayoutBgImageContainerStyle = {
	width: '100%',
	height: '100%',
	position: 'absolute',
	zIndex: -1,
} as const;

export {
	DesktopLayoutContainerStyle,
	DesktopLayoutLeftSideContainerStyle,
	DesktopLayoutRightSideContainerStyle,
	DesktopLayoutBgImageContainerStyle,
};
