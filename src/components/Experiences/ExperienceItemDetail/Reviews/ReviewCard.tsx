import { Stack, CardMedia, Typography, Rating } from '@mui/material';
import React from 'react';
import {
	ExperienceItemReviewListImageStyle,
	ExperienceItemReviewComments,
} from '../styles/ExperienceItemDetailStyles';

interface ReviewCardProps {
	name: string;
	createdAt: string;
	rating: number;
	comment: string;
}

const ReviewCard = ({ name, createdAt, rating, comment }: ReviewCardProps) => {
	return (
		<>
			<Stack
				display={'flex'}
				direction={'row'}
				spacing={2}
				alignItems={'center'}
				justifyContent={'start'}
				mt={{ lg: 4, xs: 3 }}
			>
				<CardMedia
					sx={ExperienceItemReviewListImageStyle}
					image="https://generation-sessions.s3.amazonaws.com/a3b9b3a7e421864454c470b13e19b0d1/img/mask-group-2@2x.png"
				/>
				<Stack>
					<Typography variant="body1">
						<strong>{name}</strong>
					</Typography>
					<Typography variant="body2">{createdAt}</Typography>
					<Stack
						display={'flex'}
						direction={'row'}
						spacing={1}
						mb={'1'}
					>
						<Rating value={rating} readOnly></Rating>
					</Stack>
				</Stack>
			</Stack>

			<Typography sx={ExperienceItemReviewComments}>{comment}</Typography>
		</>
	);
};

export default ReviewCard;
