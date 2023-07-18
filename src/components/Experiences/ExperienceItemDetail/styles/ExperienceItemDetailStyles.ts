const TopModelImageComponentContainerStyle = {
	position: 'relative',
	px: { xs: 0.5 },
	overflow: 'hidden',
	height: {
		xs: '400px',
		md: '520px',
		lg: '550px',
		xl: '600px',
	},
} as const;

const ExperienceItemDetailDescriptionBoxContainer = {
	mt: { xs: 0, lg: 1 },
} as const;

const ExperienceItemDetailModelBoxContainer = {
	flexBasis: '35%',
	mt: { xs: 0, md: 4 },
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
} as const;

const ExperienceItemDetailModelBoxContainerNew = {
	backgroundColor: '#ffffff',
	borderRadius: '15px',
	boxShadow: { xl: '0px 4px 15px #00000020' },
	paddingBottom: '36px',
};

const ExperienceItemDetailDescriptionText1 = {
	color: '#00000080',
	fontWeight: '400',
};

const ExperienceItemDetailDescriptionText2 = {
	color: '#000000',
	fontWeight: '500',
	lineHeight: '27px',
	whiteSpace: 'nowrap',
	marginTop: 2,
};

const ExperienceItemDetailDescriptionText3 = {
	color: '#00000080',
	fontSize: '14px',
	fontWeight: '400',
	lineHeight: '21px',
};

const ExperienceItemDetailAccordionBox = {
	borderRadius: '5px',
	mt: 2,
};

const ExperienceItemDetailAccordionTextStyle = {
	color: '#000',
	fontWeight: '500',
};

const ExperienceItemReviewContainer = {
	backgroundColor: '#00016a0d',
	borderRadius: '5px',
	height: '44px',
	color: '#000000',
	display: 'flex',
	alignItems: 'center',
	direction: 'row',
	gap: '10px',
	pl: 1,
};

const ExperienceItemReviewStar = {
	height: '16px',
	width: '16px',
	marginLeft: '16px',
	marginRight: '8px',
	marginY: '14px',
};

const ExperienceItemReviewComments = {
	color: 'grey',
	fontSize: '14px',
	fontWeight: '400',
	lineHeight: '21px',
	textAlign: 'left',
	mt: 1,
};

const ExperienceItemReviewTextStyle = {
	fontSize: '20px',
	fontWeight: '500',
	textAlign: 'left',
};

const ExperienceItemReviewListImageStyle = {
	height: '65px',
	left: '0',
	top: '0',
	width: '65px',
};

const ExperienceItemReviewReadMoreStyle = {
	borderRadius: '25px',
	boxShadow: '0px 4px 8px #4548e840',
};

const ExperienceItemReviewReadMoreText = {
	color: '#ffffff',
};
export {
	ExperienceItemDetailAccordionBox,
	ExperienceItemDetailAccordionTextStyle,
	ExperienceItemDetailDescriptionBoxContainer,
	ExperienceItemDetailDescriptionText1,
	ExperienceItemDetailDescriptionText2,
	ExperienceItemDetailDescriptionText3,
	ExperienceItemDetailModelBoxContainer,
	ExperienceItemDetailModelBoxContainerNew,
	ExperienceItemReviewComments,
	ExperienceItemReviewContainer,
	ExperienceItemReviewListImageStyle,
	ExperienceItemReviewReadMoreStyle,
	ExperienceItemReviewReadMoreText,
	ExperienceItemReviewStar,
	ExperienceItemReviewTextStyle,
	TopModelImageComponentContainerStyle,
};
