const ExploreMoreTextStyle = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	backgroundColor: '#00016a0d',
	borderRadius: '5px',
	height: '44px',
};
const ExploreMoreText = {
	fontWeight: '500',
	marginLeft: '11px',
	marginY: '7px',
};

const NavigationContainerStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: 2,
	mr: 1,
};

const NavigationBoxStyle = {
	'&:hover': {
		background: 'transparent',
	},
	display: { xs: 'none', sm: 'flex' },
	width: '35px',
	height: '10px',
	zIndex: 0,
};

const ExploreMainImage = {
	backgroundPosition: '50% 50%',
	backgroundSize: 'cover',
	height: '337px',
	left: '0',
	top: '0',
	width: '295px',
};

const ExploreCardImageStyle = {
	background: '#ffffff',
	border: ' 1px solid',
	borderColor: '#e2e2e2',
	borderRadius: '10px',
	boxShadow: '0px 4px 15px #00000026',
	height: '462px',
	width: '295px',
	display: 'flex',
	position: 'relative',
};

const ExploreCardImageContainer = {
	position: 'absolute',
};
const ExploreCardImageHeartContainer = {
	backgroundColor: '#00000066',
	borderRadius: '16.03px',
	position: 'absolute',
	height: '32px',
	width: '32px',
	left: '251px',
	top: '13px',
};

const ExploreCardImageHeartStyle = {
	height: '17px',
	position: 'absolute',
	width: '17px',
	zIndex: '99',
};

const ExploreCardTextStyle = {
	padding: '10px',
	alignItems: 'start',
	mb: '3px',
	marginTop: '345px',
};

const ExploreCardStarImage = {
	height: '16px',
	top: '1px',
	width: '16px',
	marginRight: '4.5px',
};
const ExploreCardText1 = {
	display: 'flex',
	direction: 'row',
	color: '#686868',
	fontSize: '16px',
	fontWeight: '400',
	letterSpacing: '0',
	lineHeight: '19.2px',
	whiteSpace: 'nowrap',
	width: '190px',
};
const ExploreCardText2 = {
	color: '#000000',
	fontSize: '20px',
	fontWeight: '500',
	letterSpacing: '0',
	lineHeight: '24px',
	width: '274px',
	marginBottom: '6px',
};

export {
	ExploreCardImageContainer,
	ExploreCardImageHeartContainer,
	ExploreCardImageHeartStyle,
	ExploreCardImageStyle,
	NavigationContainerStyle,
	ExploreCardStarImage,
	NavigationBoxStyle,
	ExploreCardText1,
	ExploreCardText2,
	ExploreCardTextStyle,
	ExploreMainImage,
	ExploreMoreText,
	ExploreMoreTextStyle,
};
