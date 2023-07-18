import { StaticImageData } from 'next/image';
import {
	StyledBannerAdsItemImageStyle,
	StyledBannerAdsItemWrapper,
} from '../styles/BannerAdsItemStyles';
interface DesktopBannerAdsItemProps {
	bannerImage: StaticImageData;
}

const DesktopBannerAdsItem = ({ bannerImage }: DesktopBannerAdsItemProps) => {
	return (
		<>
			<StyledBannerAdsItemWrapper
				sx={{
					height: {
						xs: '160px',
						md: '210px',
						lg: '260px',
						xl: '300px',
					},
					width: '100%',
					xl: { width: '1580px' },
				}}
			>
				<StyledBannerAdsItemImageStyle src={bannerImage} alt="Banner" />
			</StyledBannerAdsItemWrapper>
		</>
	);
};

export default DesktopBannerAdsItem;
