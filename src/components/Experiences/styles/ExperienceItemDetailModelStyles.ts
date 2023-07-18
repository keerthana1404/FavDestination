const ExperienceItemDetailModelStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: { md: '90%', lg: '85%', xl: '1400px' },
	maxHeight: '80%',
	overflow: 'auto',
	bgcolor: 'background.paper',
	boxShadow: 24,
	borderRadius: { xs: '10px', md: '40px 40px 20px 20px' },
	'&:focus': {
		outline: 'none',
	},
} as const;

export { ExperienceItemDetailModelStyle };
