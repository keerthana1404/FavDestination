const ExperienceProductsContainerStyle = {
	mt: { xs: 2, sm: 4 },
	display: 'flex',
	flexDirection: 'column',
	gap: { xs: 2, sm: 4 },
} as const;

const ServerExperienceProductsListContainerStyle = {
	display: 'flex',
	width: '100%',
	overflow: 'hidden',
	gap: { xs: '0px', sm: '20px' },
} as const;

const ExperienceItemMotionImageStyle = {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: -1,
	height: 'auto',
	width: '100%',
} as const;

const ExperienceItemContainerStyle = {
	cursor: 'pointer',
	mt: 1,
	height: {
		xs: '170px',
		sm: '220px',
	},
	width: {
		md: '340px',
		sm: '340px',
		xs: '270px',
	},
	borderRadius: 6,
	overflow: 'hidden',
	position: 'relative',
	mx: 1,
} as const;

const ExperienceItemV2ContainerStyle = {
	cursor: 'pointer',
	mt: 1,
	height: '500px',
	width: '300px',
	overflow: 'hidden',
	mx: 1,
} as const;

const ExperienceItemBoxWrapperContainerStyle = {
	height: '100%',
	p: 2,
	boxSizing: 'border-box',
	background:
		'linear-gradient(180deg, rgba(255,255,255,0) 23%, rgba(48,48,48,1) 100%)',
} as const;

export {
	ExperienceProductsContainerStyle,
	ServerExperienceProductsListContainerStyle,
	ExperienceItemMotionImageStyle,
	ExperienceItemContainerStyle,
	ExperienceItemBoxWrapperContainerStyle,
	ExperienceItemV2ContainerStyle,
};
