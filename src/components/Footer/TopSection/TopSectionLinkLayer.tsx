import { Box, List } from '@mui/material';
import { footerLinkType } from '../types/FooterLinksType';
import TopSectionLinkLayerItems from './TopSectionLinkLayerItems';

interface TopSectionLinkLayerProps {
	linkData: footerLinkType[];
}

const TopSectionLinkLayer = ({ linkData }: TopSectionLinkLayerProps) => {
	return (
		<>
			<Box flex={1}>
				<List
					sx={{
						cursor: 'pointer',
						display: 'flex',
						justifyContent: { xs: 'center', lg: 'flex-end' },
					}}
				>
					<Box
						sx={{
							width: '250px',
						}}
					>
						<TopSectionLinkLayerItems linkData={linkData} />
					</Box>
				</List>
			</Box>
		</>
	);
};

export default TopSectionLinkLayer;
