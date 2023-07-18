import { ComponentHeadingTypography } from '@components/styles/ComponentsStyles';
import { UseStateUpdationValueType } from '@components/types/reactHooksTypes';
import { Box, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import RatingFilterItems from './RatingFilterItems';

interface RatingFilter {
	chooseRating: number;
	setChooseRating: UseStateUpdationValueType<number>;
}

const RatingFilter = ({ chooseRating, setChooseRating }: RatingFilter) => {
	const handleChangeRating = (rating: number) => {
		setChooseRating(rating);
	};

	return (
		<>
			<Box mt={4}>
				<ComponentHeadingTypography variant="h6">
					Ratings
				</ComponentHeadingTypography>
				<Typography variant="body2">
					Select your preferred city or country / Optional
				</Typography>
				<Stack mt={2} gap={1}>
					<RatingFilterItems
						chooseRating={chooseRating}
						handleChangeRating={handleChangeRating}
					/>
				</Stack>
			</Box>
		</>
	);
};

export default memo(RatingFilter);
