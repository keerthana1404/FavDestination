import { RATING_DATA } from '@constants/filterData';
import { Box, Rating, Typography } from '@mui/material';

interface RatingFilterItemsProps {
	chooseRating: number;
	handleChangeRating: (_rating: number) => void;
}

const RatingFilterItems = ({
	chooseRating,
	handleChangeRating,
}: RatingFilterItemsProps) => {
	return (
		<>
			{RATING_DATA.map((rating, index) => {
				const currentRating = rating === chooseRating;
				return (
					<Box
						sx={{ display: 'flex', alignItems: 'center' }}
						key={` RatingFilter-${rating}-${index}`}
					>
						<input
							name="rating"
							type="radio"
							defaultChecked={currentRating}
							onClick={() => handleChangeRating(rating)}
						/>
						&nbsp;
						<Rating name="read-only" value={rating} readOnly />
						<Typography variant="body2">&nbsp; & up</Typography>
					</Box>
				);
			})}
		</>
	);
};

export default RatingFilterItems;
