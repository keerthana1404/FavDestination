import styled from '@emotion/styled';
import { Box } from '@mui/material';
import Image from 'next/image';

const StyledBannerAdsItemWrapper = styled(Box)(() => ({
	display: 'flex',
	justifyContent: 'center',
	paddingBottom: '0px',
	cursor: 'pointer',
}));

const StyledBannerAdsItemImageStyle = styled(Image)(() => ({
	objectFit: 'fill',
	height: '100%',
	width: '100%',
}));

export { StyledBannerAdsItemWrapper, StyledBannerAdsItemImageStyle };
