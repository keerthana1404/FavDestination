import UmegoBannerAd1 from '@assets/UmegoBannerAd1.png';
import { Box } from '@mui/material';
import { memo } from 'react';
import DesktopBannerAdsItem from './DesktopBannerAdsItem';

const BannersAds = () => {
	return (
		<>
			<Box sx={{ mt: { xs: 2, sm: 4 } }}>
				<DesktopBannerAdsItem bannerImage={UmegoBannerAd1} />
			</Box>
		</>
	);
};

export default memo(BannersAds);
