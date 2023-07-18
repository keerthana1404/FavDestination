import { ExperienceItemTypesWithoutCategory } from '@components/types/experienceItemType';
import { Box, CardMedia, Grid, IconButton } from '@mui/material';
import {
	PlayIconStyle,
	TopModelImageBoxGalleryBoxStyle,
	TopModelImageBoxStyle,
} from '../styles/TopModelImageComponentStyles';
import CollectionsIcon from '@mui/icons-material/Collections';

interface TopModelMainImageProps {
	experienceItem: ExperienceItemTypesWithoutCategory;
}

const TopModelMainImage = ({ experienceItem }: TopModelMainImageProps) => {
	return (
		<Box sx={TopModelImageBoxStyle}>
			<Grid
				container
				spacing={{ xs: 0.8, md: 1.3 }}
				sx={{ height: '100%' }}
			>
				{/* Left Images */}
				<Grid item xs={5} md={6} sx={{ height: '100%' }}>
					<Grid
						container
						spacing={{ xs: 0.8, md: 1.3 }}
						sx={{ height: '100%' }}
					>
						<Grid
							item
							md={6}
							xs={12}
							sx={{ height: '100%', position: 'relative' }}
						>
							<CardMedia
								component="img"
								alt="Polygon"
								image={
									'https://generation-sessions.s3.amazonaws.com/a3b9b3a7e421864454c470b13e19b0d1/img/image-8.png'
								}
								sx={{ height: '100%', borderRadius: '6px' }}
							/>
							{/* play pause icon */}
							<Box sx={PlayIconStyle} />
						</Grid>
						<Grid item xs={6} sx={{ height: '100%' }}>
							<CardMedia
								component="img"
								image={experienceItem.images[1]}
								alt="Top most visited"
								sx={{
									height: '100%',
									borderRadius: '6px',
									display: { xs: 'none', md: 'block' },
								}}
							/>
						</Grid>
					</Grid>
				</Grid>

				{/* Right Images */}
				<Grid item xs={7} md={6} sx={{ height: '100%' }}>
					<Grid
						container
						spacing={{ xs: 0.8, md: 1.3 }}
						sx={{ height: '100%' }}
					>
						{/* Image 1 */}
						<Grid item xs={6} sx={{ height: '50%', width: '100%' }}>
							<CardMedia
								component="img"
								image={experienceItem.images[2]}
								alt="Top most visited"
								sx={{ height: '100%', borderRadius: '6px' }}
							/>
						</Grid>

						{/* Image 2 */}

						<Grid item xs={6} sx={{ height: '50%', width: '100%' }}>
							<CardMedia
								component="img"
								image={experienceItem.images[3]}
								alt="Top most visited"
								sx={{ height: '100%', borderRadius: '6px' }}
							/>
						</Grid>

						{/* Image 3 */}
						<Grid item xs={6} sx={{ height: '50%', width: '100%' }}>
							<CardMedia
								component="img"
								image={experienceItem.images[4]}
								alt="Top most visited"
								sx={{ height: '100%', borderRadius: '6px' }}
							/>
						</Grid>

						{/* Image 4 */}
						<Grid item xs={6} sx={{ height: '50%', width: '100%' }}>
							<CardMedia
								component="img"
								image={experienceItem.images[5]}
								alt="Top most visited"
								sx={{ height: '100%', borderRadius: '6px' }}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<IconButton
				sx={TopModelImageBoxGalleryBoxStyle}
				size="large"
				color="primary"
			>
				<CollectionsIcon />
			</IconButton>
		</Box>
	);
};

export default TopModelMainImage;
// Refactor needed.
