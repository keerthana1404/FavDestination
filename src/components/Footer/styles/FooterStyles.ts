import { styled } from '@mui/material';
import Image from 'next/image';

const FooterSubscribeComponentBoxStyle = {
	bgcolor: '#309AFE',
	width: '100%',
	overflow: 'hidden',
	position: 'relative',
} as const;

const FooterSubscribeComponentBoxContentStyle = {
	width: '100%',
	height: '100%',
	position: 'absolute',
	top: 0,
	left: 0,
	alignItems: 'center',
	justifyContent: 'center',
	py: 6,
	boxSizing: 'border-box',
} as const;

const FooterSubscribeComponentHeadingStyle = {
	color: 'white',
	fontWeight: 'bold',
	textAlign: 'center',
	fontSize: { xs: '20px', sm: '30px', md: '' },
} as const;

const FooterSubscribeComponentSubscribeButtonStyle = {
	bgcolor: '#DDDDDD',
	py: 1.5, // Reduce the padding-y value to make the button smaller
	px: 4,
	position: 'relative',
	left: '14px',
	borderRadius: '20px',
} as const;

const FooterSubscribeComponentTextFieldStyle = {
	bgcolor: 'white',
	borderRadius: '20px',
	width: { xs: '100%', sm: '400px', md: '500px' },
	outline: 'none',
	border: '0',
	pr: 0,
	mt: 1,
	'& fieldset': { border: 'none' },
} as const;

const StyledFilterButtonBaseImage = styled(Image)(() => ({}));

const MidSectionBoxStyle = {
	bgcolor: '#383844',
	color: 'white',
} as const;

export {
	FooterSubscribeComponentBoxStyle,
	FooterSubscribeComponentBoxContentStyle,
	FooterSubscribeComponentHeadingStyle,
	FooterSubscribeComponentSubscribeButtonStyle,
	FooterSubscribeComponentTextFieldStyle,
	StyledFilterButtonBaseImage,
	MidSectionBoxStyle,
};
