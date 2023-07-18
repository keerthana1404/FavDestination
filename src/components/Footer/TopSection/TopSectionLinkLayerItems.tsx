import { Link, ListItem, Typography } from '@mui/material';
import { footerLinkType } from '../types/FooterLinksType';

interface TopSectionLinkLayerItemsProps {
	linkData: footerLinkType[];
}

const TopSectionLinkLayerItems = ({
	linkData,
}: TopSectionLinkLayerItemsProps) => {
	return (
		<>
			{linkData.map((link) => {
				return (
					<Link
						href={link.href}
						sx={{ textDecoration: 'none' }}
						key={`TopSectionLink-${link.label}-${link.id}`}
					>
						<ListItem
							sx={{
								px: 0,
							}}
						>
							<Typography variant="body1" color="grey">
								{link.label}
							</Typography>
						</ListItem>
					</Link>
				);
			})}
		</>
	);
};

export default TopSectionLinkLayerItems;
