const SuccessPageBoxContainer = {
	width: '80vw',
	marginTop: '300px',
	borderRadius: '15px',
	background: '#FFF',
	boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.1)',
	justifyContent: 'center',
	alignItems: 'center',
	margin: '30px',
};

const SuccessPageMainTextStyle = {
	color: '#3D44DF',
	textAlign: 'center',
	fontSize: '32px',
	fontStyle: 'normal',
	fontWeight: '700',
	lineHeight: '100%',
	marginTop: '33px',
	marginBottom: '15px',
};

const SuccessPageSubTextStyle = {
	color: 'rgba(0, 0, 0, 0.80)',
	textAlign: 'center',
	fontSize: '16px',
	fontStyle: 'normal',
	fontWeight: '400',
	lineHeight: '100%',
};

const SuccessPageExploringButton = {
	width: { md: '40%', lg: '20%' },
	height: '52px',
	flexShrink: '0',
	borderRadius: '25px',
	border: '1px solid #3E45E0',
	background: '#3E45E0',
	boxShadow: '0px 4px 7px 0px rgba(0, 0, 0, 0.10)',
	marginY: '28px',
	'& :hover': {
		background: 'rgba(61, 68, 223, 0.10)',
		width: '100%',
		color: 'black',
		borderRadius: '25px',
	},
};

const SuccesPageExploreTextStyle = {
	display: 'flex',
	flexDirection: 'column',
	flexShrink: '0',
	color: '#FFF',
	textAlign: 'center',
	fontSize: '18px',
	fontStyle: 'normal',
	fontWeight: '600',
	lineHeight: '100%',
	textTransform: 'uppercase',
	paddingX: '7px',
	paddingY: '17px',
};

const SuccessPageFollowUsBox = {
	width: '70%',
	height: '93px',
	background:
		'linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(208, 220, 231, 0.50) 52.60%, rgba(255, 255, 255, 0.00) 100%)',
};

const SuccessPageFollowTextStyle = {
	color: '#000',
	textAlign: 'center',
	fontSize: '16px',
	fontStyle: 'normal',
	fontWeight: '400',
	lineHeight: '100%',
	textTransform: 'uppercase',
	marginTop: '13px',
};

const SuccessPageIconFrame = {
	direction: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	marginTop: '10px',
	marginX: '10px',
};

const Frame = {
	backgroundColor: '#3D44DF',
	width: '40px',
	height: '40px',
	borderRadius: '50%',
	margin: '5px',
};
const FrameOther = {
	backgroundColor: 'rgba(255, 255, 255, 0.00)',
	width: '40px',
	height: '40px',
	borderRadius: '50%',
	margin: '5px',
	border: '1px solid #3D44DF',
};

const FacebookIconStyle = {
	width: '40px',
	height: '40px',
};

const SubcribeBox = {
	width: { xl: '45%', lg: '55%', md: '70%', sm: '90%' },
	borderRadius: '8px',
	border: '1px solid #ECECEC',
	background: '#FFF',
	boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.08)',
	marginBottom: '76px',
	marginTop: '30px',
	justifyContent: 'center',
	alignItems: 'center',
};

const SubcribeIconFrame = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: 'rgba(61, 68, 223, 0.10)',
	width: '80px',
	height: '80px',
	borderRadius: '50%',
	marginTop: '30px',
};

const SubscribeInputBox = {
	'& .MuiInputLabel-root': {
		color: 'rgba(0, 0, 0, 0.60)',
		fontSize: '16px',
		fontStyle: 'normal',
		fontWeight: '400',
	},
	'& .MuiInputBase-root': {
		background: '#FFF',
	},
	border: '1px solid white',
	width: '90%',
	borderRadius: '100px',
	overflow: 'hidden',
	boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.25)',
};

const SignupTextStyle = {
	color: '#000',
	textAlign: 'center',
	fontSize: '18px',
	fontStyle: 'normal',
	fontWeight: '400',
	lineHeight: '160%',
	marginBottom: '21px',
	marginX: '50px',
};

const SubscribeButtonStyle = {
	position: 'absolute',
	top: '50%',
	transform: 'translate(0,-50%)',
	right: '30px',
	height: '44px',
	paddingX: '26px',
	paddingY: '13px',
	borderRadius: '25px',
	background: 'linear-gradient(180deg, #3E45E1 0%, #181C8E 100%)',
	boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.10)',
};

export {
	FacebookIconStyle,
	Frame,
	FrameOther,
	SignupTextStyle,
	SubcribeBox,
	SubcribeIconFrame,
	SubscribeButtonStyle,
	SubscribeInputBox,
	SuccesPageExploreTextStyle,
	SuccessPageBoxContainer,
	SuccessPageExploringButton,
	SuccessPageFollowTextStyle,
	SuccessPageFollowUsBox,
	SuccessPageIconFrame,
	SuccessPageMainTextStyle,
	SuccessPageSubTextStyle,
};
