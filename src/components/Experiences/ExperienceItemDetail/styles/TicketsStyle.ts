const TicketMainContainer = {
	position: 'sticky',
	top: '70px',
	backgroundColor: '#ffffff',
	border: '1px solid',
	borderColor: '#ececec',
	borderRadius: '15px',
	boxShadow: '0px 4px 8px #00000014',
	p: 2,
};

const TicketItemContainerStyle = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
	gap: '10px',
};

const TicketTextStyle = {
	color: '#000000',
	fontWeight: '600',
	mb: 1,
};

const TicketSelectContainer = {
	width: '60%',
};

const TicketSelectTextStyle = {
	color: '#000000',
	whiteSpace: 'nowrap',
	fontWeight: '600',
	fontSize: '22px',
};

const TicketSelectOptionContainer = {
	height: '35px',
	width: '183px',
	borderRadius: '25px',
	border: '1px solid #D0D0D0',
	background: '#FFF',
	boxShadow: '0px 4px 7px 0px rgba(0, 0, 0, 0.10)',
};

const TicketBoxContainer = {
	borderRadius: '15px',
	boxShadowBottom: '0px 4px 8px 0px rgba(0, 0, 0, 0.08)',
};

const TicketClearButton = {
	width: '63px',
	height: '28px',
	color: '#631D76',
	borderRadius: '5px',
	border: '1px solid #631D76',
	textTransform: 'lower !important',
	background: '#FFF',
	textDecoration: 'underline',
};

const TicketCalendarButton = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexShrink: '0',
	borderRadius: '25px',
	border: '1px solid #631D76',
	background: '#FFF',
	color: '#631D76',
	marginTop: '18px',
	'& .MuiSvgIcon-root': {
		color: '#631D76',
	},
	'& .css-yjsfm1>span': {
		display: 'flex !important',
		justify: 'center !important',
		alignItems: 'center !important',
		paddingTop: '20px !important',
	},
};

const TicketComboBoxContainer = {
	borderRadius: '10px',
	border: '1px solid #631D76',
	background: '#FFF',
	boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.10)',
	marginTop: '18px',
	paddingBottom: '24px',
};

const TicketComboBoxTextStyle = {
	color: '#707071',
	fontSize: '14px',
	fontStyle: 'normal',
	fontWeight: '600',
	lineHeight: '100%',
	marginLeft: '9px',
	marginTop: '10px',
	marginBottom: '10px',
};

const TicketComboOptionSelected = {
	display: 'inline-flex',
	height: '34px !important',
	justifyContent: 'center',
	alignItems: 'start',
	flexShrink: '0',
	borderRadius: '25px',
	border: '1px solid #4145EC',
	background: '#4145EC',
	marginY: '4px',
	marginRight: '20px',
};

const TicketComboOptionSelectedTextStyle = {
	color: '#FFF',
	textAlign: 'center',
	fontSize: '14px',
	fontStyle: 'normal',
	fontWeight: '500',
	lineHeight: '100%',
	padding: '16px',
};

const TicketStudioButton = {
	width: 'max-content',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '10px',
	borderRadius: '25px',
	border: '1px solid #631D76',
	background: '#FFF',
	marginY: '4px',
	paddingX: '10px',
};

const TicketButtonText = {
	color: '#000000',
	textAlign: 'center',
	fontSize: '14px',
	fontStyle: 'normal',
	fontWeight: '500',
	paddindX: '16px',
	paddingY: '10px',
	wordWrap: 'break-word !important',
};

const TicketStudioButtonTwo = {
	display: 'inline-flex',
	width: 'auto',
	justifyContent: 'center',
	alignItems: 'start',
	flexShrink: '0',
	borderRadius: '25px',
	border: '1px solid #331D2C',
	background: '#631D76',
	marginY: '4px',
	marginRight: '20px',
};

const TicketStudioButtonTwoTextStyle = {
	color: '#FFF',
	textAlign: 'center',
	fontSize: '14px',
	fontStyle: 'normal',
	fontWeight: '500',
	lineHeight: '100%',
	padding: '16px',
};

const TicketStudioButtonThree = {
	display: 'inline-flex',
	justifyContent: 'center',
	alignItems: 'start',
	gap: '10px',
	flexShrink: '0',
	marginY: '4px',
	borderRadius: '25px',
	border: '1px solid #631D76',
	opacity: '0.4000000059604645',
	background: '#FFF',
	marginRight: '15px',
};

const TicketStudioButtonThreeTextStyle = {
	color: '#000',
	textAlign: 'center',
	fontSize: '14px',
	fontStyle: 'normal',
	fontWeight: '500',
	lineHeight: '120%',
	padding: '16px',
	wordBreak: 'break-word',
};

const TicketStudioButtonFour = {
	display: 'inline-flex',
	justifyContent: 'center',
	alignItems: 'start',
	gap: '10px',
	flexShrink: '0',
	marginY: '4px',
	borderRadius: '25px',
	border: '1px solid #631D76',
	background: '#FFF',
	marginRight: '15px',
};

const TicketStudioButtonFourTextStyle = {
	color: '#000',
	textAlign: 'center',
	fontSize: '14px',
	fontStyle: 'normal',
	fontWeight: '500',
	lineHeight: '120%',
	padding: '16px',
	wordBreak: 'break-word',
};

const TicketStudioButtonFive = {
	display: 'inline-flex',
	justifyContent: 'center',
	alignItems: 'start',
	gap: '10px',
	flexShrink: '0',
	marginTop: '4px',
	borderRadius: '25px',
	border: '1px solid #631D76',
	background: '#FFF',
	marginRight: '15px',
};

const TicketStudioButtonFiveTextStyle = {
	color: '#000',
	textAlign: 'center',
	fontSize: '14px',
	fontStyle: 'normal',
	fontWeight: '500',
	lineHeight: '120%',
	padding: '16px',
	wordBreak: 'break-word',
};

const TicketAdmissionBox = {
	height: 'auto',
	flexShrink: '0',
	borderRadius: '10px',
	border: '1px solid #631D76',
	background: '#FFF',
	boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.10)',
	marginTop: '15px',
};

const TicketAdmissionHeadingText = {
	color: '#707071',
	fontSize: '14px',
	fontStyle: 'normal',
	fontWeight: '600',
	lineHeight: '100%',
	paddingY: '10px',
	paddingLeft: '9px',
};

const TicketTimeButton = {
	height: '34px',
	width: '72px',
	borderRadius: '25px',
	border: '1px solid #331D2C',
	background: ' #631D76',
	marginX: '10px',
	marginTop: '5px',
	marginBottom: '15px',
	'&:hover': {
		background: '#fff',
		color: 'black',
		fontSize: '110%',
		border: '1px solid #631D76',
	},
};

const TicketTimeButtonNotSelected = {
	height: '34px',
	width: '72px',
	borderRadius: '25px',
	border: '1px solid #631D76',
	background: ' #FAFAFF',
	color: '#000',
	marginX: '10px',
	marginTop: '5px',
	marginBottom: '15px',
	'&:hover': {
		background: '#fff',
		color: 'black',
		fontSize: '110%',
		border: '1px solid #631D76',
	},
};

const TicketQuantityBox = {
	height: '138px',
	flexShrink: '0',
	borderRadius: '10px',
	border: '1px solid #631D76',
	background: '#FFF',
	boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.10)',
	marginTop: '15px',
	position: 'relative',
};

const TicketQuantityHeading = {
	height: '138px',
	borderRadius: '10px',
	border: '1px solid #631D76',
	background: '#FFF',
	boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.10)',
};

const TicketQuantityHeadingText = {
	color: '#707071',
	fontSize: '14px',
	fontStyle: 'normal',
	fontWeight: '600',
	lineHeight: '100%',
	paddingY: '10px',
	paddingLeft: '9px',
};

const TicketQuantityButton = {
	width: '28px',
	height: '28px',
	borderRadius: '4px',
	background: '#F0F0FF',
	flexShrink: '0',
	justifyContent: 'center',
	alignItems: 'center',
	marginRight: '11px',
	marginLeft: '17px',
};

const TicketQuantityFeatures = {
	height: '32px',
	borderRadius: '25px',
	background: '#F0F0FF',
	marginTop: '13px',
	justifyContent: 'center',
	alignItems: 'center',
	width: 'max-content',
	paddingY: '9px',
	paddingX: '18px',
	marginRight: '10px',
};

const TicketAmountTextStyle = {
	color: '#000',
	fontSize: '24px',
	fontStyle: 'normal',
	fontWeight: '700',
	lineHeight: '150%',
	textTransform: 'uppercase',
};

const TicketUmegoCredits = {
	display: 'inline-flex',
	padding: '5px 10px',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '10px',
	borderRadius: '25px',
	background: 'rgba(21, 171, 112, 0.10)',
	color: '#15AB70',
};

const TicketCartBox = {
	width: '100% !important',
	height: '60px',
	borderRadius: '0px 0px 15px 15px',
	background: '#4145EC',
	boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.04)',
	marginTop: '8px',
};

const TicketCartTextStyle = {
	color: '#FFF',
	textAlign: 'center',
	fontSize: '18px',
	fontStyle: 'normal',
	fontWeight: '600',
	lineHeight: '150%',
	textTransform: 'uppercase',
};

export {
	TicketAdmissionBox,
	TicketAdmissionHeadingText,
	TicketAmountTextStyle,
	TicketBoxContainer,
	TicketButtonText,
	TicketCalendarButton,
	TicketCartBox,
	TicketCartTextStyle,
	TicketClearButton,
	TicketComboBoxContainer,
	TicketComboBoxTextStyle,
	TicketComboOptionSelected,
	TicketComboOptionSelectedTextStyle,
	TicketItemContainerStyle,
	TicketMainContainer,
	TicketQuantityBox,
	TicketQuantityButton,
	TicketQuantityFeatures,
	TicketQuantityHeading,
	TicketQuantityHeadingText,
	TicketSelectContainer,
	TicketSelectOptionContainer,
	TicketSelectTextStyle,
	TicketStudioButton,
	TicketStudioButtonFive,
	TicketStudioButtonFiveTextStyle,
	TicketStudioButtonFour,
	TicketStudioButtonFourTextStyle,
	TicketStudioButtonThree,
	TicketStudioButtonThreeTextStyle,
	TicketStudioButtonTwo,
	TicketStudioButtonTwoTextStyle,
	TicketTextStyle,
	TicketTimeButton,
	TicketTimeButtonNotSelected,
	TicketUmegoCredits,
};
