import ExperiencesProductCard from '@components/Experiences/ExperiencesProductCard';
import { Box, Grid, Typography } from '@mui/material';
import { memo } from 'react';
import { ExperienceBannerItemsList } from '../constants/ExperienceBannerData';

const ExperiencesBanner = () => {
	return (
		<>
			<Box mt={4}>
				<Grid container spacing={2}>
					{/* Starting Slogan of umego */}
					<Grid
						item
						xs={12}
						sm={4}
						md={3}
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Typography
							variant="h1"
							sx={{
								fontWeight: 'bold',
								fontSize: {
									xs: '35px',
									md: '38px',
									lg: '48px',
								},
							}}
						>
							Dive into Unforgettable Experiences
						</Typography>
					</Grid>
					{/*  */}

					{ExperienceBannerItemsList.slice(0, 3).map(
						(experienceDataItem, index) => {
							return (
								<Grid
									item
									xs={12}
									sm={4}
									md={3}
									key={`ExperienceBannerItemsList-${index}`}
								>
									<ExperiencesProductCard
										experienceData={{
											id: index,
											title: 'Bosphorus Yacht Tour with Wine & Music',
											images: [experienceDataItem],
											rating: 4.96,
											city: 'Singapore',
										}}
									></ExperiencesProductCard>
								</Grid>
							);
						},
					)}
				</Grid>
			</Box>
		</>
	);
};

export default memo(ExperiencesBanner);
