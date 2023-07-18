import { Box, styled } from '@mui/material';

const BoxWrapper = styled(Box)(() => ({
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	textAlign: 'center',
}));

const ImageBoxWrapper = styled(Box)(() => ({
	display: 'flex',
	justifyContent: 'center',
}));

export { BoxWrapper, ImageBoxWrapper };
