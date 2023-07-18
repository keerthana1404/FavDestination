import { Box, styled } from '@mui/material';

const GiftCardContainerWrapper = styled(Box)(() => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	textAlign: 'center',
	alignItems: 'center',
}));

const giftCardParagraphStyle = {
	fontWeight: 'bolder',
	paddingLeft: { xs: '', md: 40 },
	paddingRight: { xs: '', md: 40 },
	color: 'GrayText',
} as const;

const giftCardButtonStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: '50px',
	marginBottom: '10px',
	textTransform: 'none',
	paddingTop: 2,
	paddingBottom: 2,
	width: '100%',
	maxWidth: '200px',
	height: '50px',
	boxShadow: '0px 4px 4px rgb(0 0 0/25%)',
	fontWeight: 'bold',
	margin: '0 auto',
	bgcolor: (theme: any) => theme.palette.secondary.main,
	color: (theme: any) => theme.palette.primary.main,
	'&:hover': {
		bgcolor: (theme: any) => theme.palette.primary.main,
		color: (theme: any) => theme.palette.secondary.main,
	},
} as const;

const discountBoxStyle = {
	display: 'flex',
	gap: 1,
	borderRadius: '50px',
	paddingLeft: '10px',
	paddingRight: '10px',
	paddingTop: '8px',
	paddingBottom: '8px',
	color: 'black',
	background: '#ECECFC',
} as const;

const discountBoxCardContainerStyle = {
	display: 'flex',
	justifyContent: 'space-between',
	paddingTop: 3,
	paddingBottom: 3,
	alignItems: 'center',
	marginLeft: '20px',
	marginRight: '20px',
} as const;

export {
	GiftCardContainerWrapper,
	giftCardParagraphStyle,
	giftCardButtonStyle,
	discountBoxStyle,
	discountBoxCardContainerStyle,
};
