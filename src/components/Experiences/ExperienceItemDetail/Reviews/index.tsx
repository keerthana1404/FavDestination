import { Box, Button, Typography } from '@mui/material';
import {
	ExperienceItemReviewContainer,
	ExperienceItemReviewTextStyle,
} from '../styles/ExperienceItemDetailStyles';
import StarRateIcon from '@mui/icons-material/StarRate';
import ReviewsList from './ReviewsListNew';

const Reviews = () => {
	return (
		<>
			<Box sx={ExperienceItemReviewContainer}>
				<StarRateIcon />
				<Typography variant="h6" sx={ExperienceItemReviewTextStyle}>
					Reviews (4.96)
				</Typography>
			</Box>
			<Box>
				<ReviewsList />
			</Box>
			<Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
				<Button
					variant="contained"
					color="secondary"
					sx={{ borderRadius: '14px' }}
				>
					READ ALL REVIEWS
				</Button>
			</Box>
		</>
	);
};

export default Reviews;
