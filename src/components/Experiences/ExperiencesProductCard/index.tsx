import { StyleHeartContainer } from './styles/ExperienceProductCardStyles';
import { ExperienceItemTypesWithoutCategory } from '@components/types/experienceItemType';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, IconButton } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ExperienceCard from './ExperienceCard';

interface ExperiencesProductCardProps {
	experienceData: ExperienceItemTypesWithoutCategory;
}

const ExperiencesProductCard = ({
	experienceData,
}: ExperiencesProductCardProps) => {
	const [isFavourite, setIsFavourite] = useState(false);
	const router = useRouter();
	const handleFavorite = () => {
		setIsFavourite(!isFavourite);
	};
	const handleClickCommunityBox = (id: number | string) => {
		router.push(`/experiences/${id}`);
	};
	return (
		<>
			<Box
				sx={{
					cursor: 'pointer',
					width: '100%',
				}}
			>
				<Box sx={{ position: 'relative' }}>
					<Box
						onClick={() => {
							handleClickCommunityBox(experienceData.id);
						}}
					>
						<ExperienceCard
							image={experienceData.images[0]}
							title={experienceData.title}
							currency={'$'}
							price={'20'}
							location={experienceData.city}
						/>
					</Box>
					<StyleHeartContainer
						onClick={handleFavorite}
						key={experienceData.id}
					>
						<IconButton
							aria-label="favorite"
							color="primary"
							size="small"
						>
							<FavoriteIcon
								sx={{
									color: isFavourite ? '#D32F2F' : '#FFFFFF',
								}}
							/>
						</IconButton>
					</StyleHeartContainer>
				</Box>
			</Box>
		</>
	);
};

export default ExperiencesProductCard;
