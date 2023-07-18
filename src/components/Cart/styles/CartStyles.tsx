import { Box, IconButton, Typography, styled } from '@mui/material';

const BpIcon = styled('span')(({ theme }) => ({
	borderRadius: 3,
	width: 22,
	height: 22,
	boxShadow:
		theme.palette.mode === 'dark'
			? '0 0 0 1px rgb(16 22 26 / 40%)'
			: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
	backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
	backgroundImage:
		theme.palette.mode === 'dark'
			? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
			: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
	'.Mui-focusVisible &': {
		outline: '2px auto rgba(19,124,189,.6)',
		outlineOffset: 2,
	},
	'input:hover ~ &': {
		backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
	},
	'input:disabled ~ &': {
		boxShadow: 'none',
		background:
			theme.palette.mode === 'dark'
				? 'rgba(57,75,89,.5)'
				: 'rgba(206,217,224,.5)',
	},
}));

const BpCheckedIcon = styled(BpIcon)({
	backgroundColor: '#137cbd',
	backgroundImage:
		'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
	'&:before': {
		display: 'block',
		width: 22,
		height: 22,
		backgroundImage:
			"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
			" fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
			"1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
		content: '""',
	},
	'input:hover ~ &': {
		backgroundColor: '#106ba3',
	},
});

const StyledOrderCustomizationIconButton = styled(IconButton)(() => ({
	backgroundColor: '#F0F0FF',
	borderRadius: '4px',
	padding: 0,
	height: '32px',
	width: '32px',
	'&.Mui-disabled': {
		background: '#F0F0FF',
		color: '#000000',
		opacity: '0.4',
	},
}));

const StyledTypography18 = styled(Typography)(({ theme }) => ({
	[theme.breakpoints.up('md')]: {
		fontSize: '15px',
	},
	fontSize: '18px',
}));

const StyledTypography24 = styled(Typography)(({ theme }) => ({
	[theme.breakpoints.up('md')]: {
		fontSize: '18px',
		lineHeight: '24px',
	},
	[theme.breakpoints.up('lg')]: {
		lineHeight: '23px',
		fontSize: '22px',
	},
	[theme.breakpoints.up('xl')]: {
		lineHeight: '24px',
		fontSize: '24px',
	},
	fontSize: '24px',
	fontWeight: '600',
}));

const StyledCardDescription = styled(Typography)(({ theme }) => ({
	[theme.breakpoints.up('md')]: {
		fontSize: '12px',
		lineHeight: '18px',
	},
	[theme.breakpoints.up('lg')]: {
		fontSize: '16px',
		lineHeight: '20px',
		marginTop: '3px',
	},
	[theme.breakpoints.up('xl')]: {
		fontSize: '16px',
		lineHeight: '24px',
		marginTop: '7px',
	},
	maxWidth: '800px',
	color: 'rgba(0, 0, 0, 0.60)',
	maxHeight: '59px',
	textOverflow: 'ellipsis',
	overflow: 'clip',
}));

const StylesIcon = {
	height: '18px',
	width: '18px',
	fill: 'black',
};

const StyledUnderLineContent = styled(Typography)(() => ({
	cursor: 'pointer',
	textDecoration: 'underline',
}));

const StyledPriceContainer = styled(Box)(() => ({
	display: 'flex',
	border: '1px solid rgba(0, 0, 0, 0.05)',
	backgroundColor: '#FAFAFF',
	padding: '8px',
	borderRadius: '4px',
	alignItems: 'center',
	justifyContent: 'space-between',
}));

const StylesOrderCartCard = {
	display: 'flex',
	height: '100%',
	borderRadius: '8px',
	boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.07)',
	padding: 2,
	paddingTop: 0.3,
	paddingLeft: 0.8,
};

const StylesOrderCartContent = {
	display: 'flex',
	flexDirection: 'column',
	padding: '0',
	paddingLeft: 2,
	paddingBottom: '0px !important',
	width: '100%',
	pt: 1,
};

const StylesDisabledCardContent = {
	width: {
		lg: '90px',
		xl: '90px',
		md: '70px',
	},
	opacity: '0.4',
};

const StylesCardContent = {
	width: {
		lg: '90px',
		xl: '90px',
		md: '70px',
	},
};

const buttonStyle = {
	textTransform: 'none',
	borderRadius: '7px',
	height: '28px',
} as const;

const containedButtonStyle = {
	borderRadius: '35px',
	width: { xl: '350px', md: '250px', lg: '300px' },
	height: '52px',
} as const;

const couponBtnStyle = {
	borderRadius: '25px',
	background: 'black',
	color: 'white',
	height: '36px',
} as const;

const textStyle = {
	marginLeft: '14px',
} as const;

const StyledCartTitle = styled(Box)(() => ({
	padding: 2,
	paddingLeft: 1.4,
	background: 'white',
	borderRadius: '15px',
}));

const CartPaymentContainerStyle = {
	borderRadius: '8px',
	border: '1px solid #ECECEC',
	background: '#FFF',
	boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.08)',
	padding: '0 15px 15px 15px',
	marginBottom: '16px',
};

const PaymentDetailBoxStyle = {
	paddingTop: '10px',
	paddingBottom: '11px',
	borderRadius: '8px 8px 0px 0px',
	background: '#FAFAFF',
	boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.04)',
	borderBottom: '1px solid #EAEAEA',
};

const SubTotalBoxStyle = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginTop: '10px',
	marginBottom: '8px',
};

const cartPriceStyle = {
	fontWeight: '700',
	fontSize: '30px',
	marginBottom: '19px',
};

const BookingCreditButtonStyle = {
	color: '#15AB70',
	background: 'rgba(21, 171, 112, 0.1)',
	borderRadius: '25px',
	padding: '8px 15px',
	mt: 2,
	width: '100%',
};

const couponBoxStyle = {
	borderRadius: '8px',
	border: '1px solid #ECECEC',
	background: '#FFF',
	boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.08)',
	paddingBottom: '15px',
};

const couponBoxHeadingStyle = {
	paddingTop: '10px',
	paddingLeft: '14px',
	paddingBottom: '11px',
	borderRadius: '8px 8px 0px 0px',
	background: '#FAFAFF',
	boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.04)',
	borderBottom: '1px solid #EAEAEA',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
};

const couponBoxContainerStyle = {
	display: 'flex',
	marginTop: '20px !important',
	padding: '10px',
	alignItems: 'center',
	background: 'white',
	borderRadius: '100px',
	gap: 1,
	margin: '15px',
	border: '1px solid rgba(208, 208, 208, 0.50)',
	justifyContent: 'space-between',
};

const infoIconStyle = {
	width: '16px',
	height: '16px',
	color: 'rgba(0, 0, 0, 0.70)',
	marginRight: '14px',
};

export {
	BpCheckedIcon,
	BpIcon,
	StyledOrderCustomizationIconButton,
	StyledTypography18,
	StylesIcon,
	StyledCardDescription,
	StyledTypography24,
	StyledPriceContainer,
	StyledUnderLineContent,
	StylesOrderCartCard,
	StylesOrderCartContent,
	StylesDisabledCardContent,
	StylesCardContent,
	StyledCartTitle,
	buttonStyle,
	containedButtonStyle,
	couponBtnStyle,
	textStyle,
	CartPaymentContainerStyle,
	PaymentDetailBoxStyle,
	SubTotalBoxStyle,
	cartPriceStyle,
	BookingCreditButtonStyle,
	couponBoxStyle,
	couponBoxHeadingStyle,
	couponBoxContainerStyle,
	infoIconStyle,
};
