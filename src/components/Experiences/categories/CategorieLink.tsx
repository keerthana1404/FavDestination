import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import {
	StyledCategoryLink,
	StyledCategoryLinkWrapper,
} from '../styles/ExperiencesCategorieStyles';
import { ExperienceCategorieLinksTypeItem } from '../types/ExperiencesCategorieTypes';

interface CategorieLinkProps {
	item: ExperienceCategorieLinksTypeItem;
	categoryName: string;
	handleCategorieChange: (_item: string) => void;
}

const CategorieLink = ({
	item,
	categoryName,
	handleCategorieChange,
}: CategorieLinkProps) => {
	const { icon, label } = item;
	const isActiveLink = label === categoryName;

	return (
		<>
			<StyledCategoryLinkWrapper
				onClick={() => handleCategorieChange(item.label)}
			>
				<StyledCategoryLink
					isactivelink={isActiveLink}
					href={`#${item.label.toLowerCase()}`}
				>
					<Box
						sx={{
							color: isActiveLink
								? 'secondary.main'
								: 'rgba(66,69,219,0.6)',
							opacity: isActiveLink ? '1' : '.7',
						}}
					>
						<Image
							width={28.9}
							height={28}
							src={icon?.src}
							alt="Icon"
						/>
					</Box>

					<Typography
						variant="body1"
						fontSize={12}
						sx={{
							color: isActiveLink ? 'secondary.main' : 'grey',
							position: 'relative',
							bottom: 0,
						}}
					>
						{item.label}
					</Typography>
				</StyledCategoryLink>
			</StyledCategoryLinkWrapper>
		</>
	);
};

export default CategorieLink;
