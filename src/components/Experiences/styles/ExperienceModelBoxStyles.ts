const ExperienceModelBoxStyle = {
	width: '100%',
	maxWidth: { md: '350px', lg: '500px' },
	boxShadow: '10px 10px 20px #CCC',
	borderRadius: '20px',
	py: 2,
	px: 3,
	position: 'sticky',
	boxSizing: 'border-box',
} as const;

const ExperienceModelBoxTitleStyle = {
	textAlign: 'center',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
} as const;

const ModelButtonWrapperStyle = {
	display: 'flex',
	border: '1px solid grey',
	borderRadius: 20,
	color: 'grey',
	width: '80px',
	justifyContent: 'space-around',
	py: 0.3,
	cursor: 'pointer',
	userSelect: 'none',
} as const;

export {
	ExperienceModelBoxStyle,
	ExperienceModelBoxTitleStyle,
	ModelButtonWrapperStyle,
};
